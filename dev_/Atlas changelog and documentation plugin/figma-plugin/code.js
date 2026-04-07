// Atlas — Changelog & Documentation Plugin
// Main plugin code (runs in Figma sandbox)

figma.showUI(__html__, { width: 480, height: 640, title: "Atlas — Changelog & Documentation" });

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getSelectedComponents() {
  const selected = figma.currentPage.selection;
  return selected.map(node => ({
    id: node.id,
    name: node.name,
    type: node.type,
    componentName: node.type === "INSTANCE" ? node.mainComponent?.name : node.name,
    description: node.type === "INSTANCE" ? node.mainComponent?.description : (node.description || ""),
  }));
}

function getFileComponents() {
  const components = [];
  figma.root.findAllWithCriteria({ types: ["COMPONENT"] }).forEach(c => {
    components.push({
      id: c.id,
      name: c.name,
      description: c.description || "",
      key: c.key,
    });
  });
  return components;
}

function getFileVariables() {
  const collections = figma.variables.getLocalVariableCollections();
  return collections.map(col => ({
    id: col.id,
    name: col.name,
    modes: col.modes.map(m => m.name),
    variableCount: col.variableIds.length,
  }));
}

function getLocalStyles() {
  return {
    colors: figma.getLocalPaintStyles().map(s => ({ name: s.name, id: s.id })),
    text: figma.getLocalTextStyles().map(s => ({ name: s.name, id: s.id })),
    effects: figma.getLocalEffectStyles().map(s => ({ name: s.name, id: s.id })),
    grids: figma.getLocalGridStyles().map(s => ({ name: s.name, id: s.id })),
  };
}

// ─── Message handler ─────────────────────────────────────────────────────────

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {

    case "GET_SELECTION": {
      const components = getSelectedComponents();
      figma.ui.postMessage({ type: "SELECTION_DATA", data: components });
      break;
    }

    case "GET_FILE_COMPONENTS": {
      const components = getFileComponents();
      figma.ui.postMessage({ type: "FILE_COMPONENTS", data: components });
      break;
    }

    case "GET_VARIABLES": {
      const variables = getFileVariables();
      figma.ui.postMessage({ type: "VARIABLES_DATA", data: variables });
      break;
    }

    case "GET_STYLES": {
      const styles = getLocalStyles();
      figma.ui.postMessage({ type: "STYLES_DATA", data: styles });
      break;
    }

    case "NAVIGATE_TO_NODE": {
      const node = figma.getNodeById(msg.nodeId);
      if (node) {
        figma.currentPage.selection = [node];
        figma.viewport.scrollAndZoomIntoView([node]);
      }
      break;
    }

    case "GET_FILE_INFO": {
      figma.ui.postMessage({
        type: "FILE_INFO",
        data: {
          name: figma.root.name,
          id: figma.fileKey,
          pageCount: figma.root.children.length,
          pages: figma.root.children.map(p => ({ id: p.id, name: p.name })),
        }
      });
      break;
    }

    case "CLOSE":
      figma.closePlugin();
      break;
  }
};

// Send initial selection on load
figma.ui.postMessage({
  type: "INIT",
  data: {
    selection: getSelectedComponents(),
    fileInfo: {
      name: figma.root.name,
      pageCount: figma.root.children.length,
    }
  }
});

// Update UI when selection changes
figma.on("selectionchange", () => {
  figma.ui.postMessage({
    type: "SELECTION_CHANGED",
    data: getSelectedComponents()
  });
});
