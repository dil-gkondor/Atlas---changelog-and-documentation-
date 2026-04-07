# Figma Console MCP — Full Capability Reference

This file documents all tools available from the `plugin:design-system-ops:figma-console` MCP server.
These are available in any Cowork session where the plugin is loaded — no copy needed, just invoke them directly.

> **Usage pattern:** In a Cowork session these tools are invoked as `mcp__plugin_design-system-ops_figma-console__<tool_name>`. They operate on whatever Figma file is currently open in the Figma desktop app.

---

## Visual Validation Workflow (Required for any design work)

After creating or modifying ANY visual element:
1. `figma_execute` — run your design code
2. `figma_take_screenshot` — capture the result
3. Analyse alignment, spacing, proportions, visual balance
4. Iterate and fix, then final `figma_take_screenshot` to confirm

---

## File & Status

| Tool | Description |
|------|-------------|
| `figma_get_status` | Check if the Figma plugin is connected and responsive |
| `figma_reconnect` | Reconnect to the Figma plugin if connection dropped |
| `figma_reload_plugin` | Reload the plugin inside Figma |
| `figma_list_open_files` | List all currently open Figma files |
| `figma_get_file_data` | Get full file data for the open file |
| `figma_get_file_for_plugin` | Get file context scoped for plugin operations |
| `figma_navigate` | Navigate to a specific node or page in Figma |
| `figma_get_selection` | Get the currently selected node(s) |

---

## Components & Library

| Tool | Description |
|------|-------------|
| `figma_search_components` | Search for components by name in open files — **call at start of every session** |
| `figma_get_component` | Get a component by node ID |
| `figma_get_component_details` | Get detailed info (props, variants, description) for a component |
| `figma_get_component_for_development` | Get component info formatted for code generation |
| `figma_get_component_for_development_deep` | Deep version — includes all nested components |
| `figma_get_component_image` | Export a component as an image |
| `figma_get_library_components` | List all components from linked libraries |
| `figma_analyze_component_set` | Analyse a component set (variants structure, naming) |
| `figma_arrange_component_set` | Auto-arrange a component set grid layout |
| `figma_instantiate_component` | Place a component instance on the canvas |
| `figma_generate_component_doc` | Auto-generate documentation for a component |

---

## Component Properties

| Tool | Description |
|------|-------------|
| `figma_add_component_property` | Add a new property to a component |
| `figma_edit_component_property` | Edit an existing component property |
| `figma_delete_component_property` | Delete a component property |
| `figma_set_instance_properties` | Set property values on a component instance |
| `figma_set_description` | Set the description text of a node or component |
| `figma_set_text` | Set the text content of a text node |

---

## Design Tokens & Variables

| Tool | Description |
|------|-------------|
| `figma_get_variables` | Get all variable collections and variables in the file |
| `figma_get_variable_defs` | Get variable definitions for a selected node |
| `figma_get_token_values` | Get resolved token values for the current context |
| `figma_browse_tokens` | Browse all tokens with filtering |
| `figma_create_variable` | Create a new variable |
| `figma_create_variable_collection` | Create a new variable collection |
| `figma_update_variable` | Update a variable's value or metadata |
| `figma_rename_variable` | Rename a variable |
| `figma_delete_variable` | Delete a variable |
| `figma_delete_variable_collection` | Delete a variable collection |
| `figma_batch_create_variables` | Create multiple variables at once |
| `figma_batch_update_variables` | Update multiple variables at once |
| `figma_add_mode` | Add a new mode to a variable collection (e.g. dark mode) |
| `figma_rename_mode` | Rename a variable mode |
| `figma_setup_design_tokens` | Scaffold a full design token structure in the file |

---

## Styles & Fills

| Tool | Description |
|------|-------------|
| `figma_get_styles` | Get all styles (colour, text, effect, grid) defined in the file |
| `figma_get_text_styles` | Get all text styles specifically |
| `figma_set_fills` | Set fill properties on a node |
| `figma_set_image_fill` | Set an image as the fill of a node |
| `figma_set_strokes` | Set stroke properties on a node |

---

## Node Manipulation

| Tool | Description |
|------|-------------|
| `figma_create_child` | Create a child node inside a parent frame/group |
| `figma_clone_node` | Clone/duplicate a node |
| `figma_rename_node` | Rename a node in the layer tree |
| `figma_move_node` | Move a node to new x/y coordinates |
| `figma_resize_node` | Resize a node |
| `figma_delete_node` | Delete a node |
| `figma_execute` | Execute arbitrary Figma plugin JavaScript for complex operations |

---

## Audit & Linting

| Tool | Description |
|------|-------------|
| `figma_audit_design_system` | Run a full design system audit on the open file |
| `figma_audit_component_accessibility` | Audit a component for accessibility issues |
| `figma_lint_design` | Lint the design against configured rules |
| `figma_check_design_parity` | Check if design matches expected spec |
| `figma_scan_code_accessibility` | Scan for accessibility issues in code annotations |
| `figma_get_design_changes` | Get a diff of recent design changes |
| `figma_get_design_system_kit` | Get the full design system kit summary |
| `figma_get_design_system_summary` | Get a high-level design system summary |

---

## Screenshots & Capture

| Tool | Description |
|------|-------------|
| `figma_take_screenshot` | Take a screenshot of the current Figma view |
| `figma_capture_screenshot` | Capture a specific node or region |

---

## Annotations & Comments

| Tool | Description |
|------|-------------|
| `figma_get_annotations` | Get all annotations on the current file |
| `figma_set_annotations` | Set/update annotations on nodes |
| `figma_get_annotation_categories` | Get annotation category definitions |
| `figma_get_comments` | Get all comments on the file |
| `figma_post_comment` | Post a new comment on the file |
| `figma_delete_comment` | Delete a comment |

---

## Console & Debugging

| Tool | Description |
|------|-------------|
| `figma_get_console_logs` | Get logs from the Figma plugin console |
| `figma_clear_console` | Clear the plugin console |
| `figma_watch_console` | Watch for new console messages in real time |

---

## Slides (Figma Slides)

| Tool | Description |
|------|-------------|
| `figma_list_slides` | List all slides in a Slides presentation |
| `figma_create_slide` | Create a new slide |
| `figma_delete_slide` | Delete a slide |
| `figma_duplicate_slide` | Duplicate a slide |
| `figma_reorder_slides` | Reorder slides |
| `figma_get_slide_content` | Get the content of a specific slide |
| `figma_get_focused_slide` | Get the currently focused slide |
| `figma_focus_slide` | Navigate focus to a specific slide |
| `figma_skip_slide` | Mark a slide as skipped in presentation |
| `figma_add_text_to_slide` | Add a text element to a slide |
| `figma_add_shape_to_slide` | Add a shape to a slide |
| `figma_get_slide_grid` | Get the layout grid of a slide |
| `figma_get_slide_transition` | Get the transition settings for a slide |
| `figma_set_slide_transition` | Set the transition for a slide |
| `figma_set_slide_background` | Set the background of a slide |
| `figma_set_slides_view_mode` | Set the view mode for Slides (presenter/editor) |

---

## FigJam

| Tool | Description |
|------|-------------|
| `figjam_get_board_contents` | Get all elements on a FigJam board |
| `figjam_get_connections` | Get all connector arrows on the board |
| `figjam_create_sticky` | Create a single sticky note |
| `figjam_create_stickies` | Create multiple sticky notes at once |
| `figjam_create_shape_with_text` | Create a shape containing text |
| `figjam_create_section` | Create a section/swim lane on the board |
| `figjam_create_connector` | Create a connector arrow between nodes |
| `figjam_create_code_block` | Create a code block on the board |
| `figjam_create_table` | Create a table on the board |
| `figjam_auto_arrange` | Auto-arrange elements on the board |

---

## Dashboard & Refresh

| Tool | Description |
|------|-------------|
| `ds_dashboard_refresh` | Refresh the design system dashboard view |
| `token_browser_refresh` | Refresh the token browser |

---

## Component Placement Rules (Always follow these)

1. **Always search first:** Call `figma_search_components` at the start of every session — node IDs are session-specific
2. **Always use a container:** Before placing any component, find or create a `Section` or `Frame` to place it inside
3. **Never float on blank canvas:** Components placed outside a container look disorganised and are harder to navigate
4. **Iterate with screenshots:** After every design change, capture with `figma_take_screenshot` before proceeding

```javascript
// Standard pattern — find or create a section before placing anything
let section = figma.currentPage.findOne(n => n.type === 'SECTION' && n.name === 'Components');
if (!section) {
  section = figma.createSection();
  section.name = 'Components';
  section.x = 0;
  section.y = 0;
}
// Place component inside section
```
