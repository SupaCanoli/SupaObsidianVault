var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/constants.js
var require_constants = __commonJS({
  "src/constants.js"(exports2, module2) {
    var GRAPHFRONTIER_VIEW_TYPE2 = "graphfrontier-view";
    var NODE_MULTIPLIER_MIN2 = 1;
    var NODE_MULTIPLIER_MAX2 = 10;
    var ZOOM_STEP_FACTOR2 = 1.12;
    var TWO_PI = Math.PI * 2;
    var DEFAULT_DATA2 = {
      active_layout_name: "data.json",
      pins: {},
      orbit_pins: {},
      saved_positions: {},
      saved_layout_settings: {},
      saved_layout_pins: {},
      saved_layout_orbit_pins: {},
      node_force_multipliers: {},
      strong_pull_nodes: {},
      painted_edge_colors: {},
      node_label_sizes: {},
      groups: [],
      blacklist: [],
      whitelist: [],
      hotkeys: {},
      settings: {
        grid_step: 20,
        show_grid: true,
        hide_orphans: true,
        hide_attachments: true,
        attachments_on_orbits: true,
        existing_files_only: true,
        search_mode: "find",
        show_search_connections: false,
        quick_pick_modifier: "alt",
        selection_box_modifier: "shift",
        selection_toggle_modifier: "none",
        node_size_scale: 1,
        edge_width_scale: 0.34,
        painted_edge_width: 0.2,
        label_zoom_steps: 10,
        label_font_size: 9,
        hover_dim_strength: 80,
        strong_pull_multiplier: 5,
        orbit_distance: 48,
        attachment_size_multiplier: 1,
        attachment_link_distance_multiplier: 20,
        base_link_strength: 46,
        link_distance: 24,
        repel_strength: 51,
        repel_radius: 265,
        center_strength: 52,
        damping: 0.18,
        layout_autosave: false,
        export_static_html_path: ""
      },
      view_state: {
        pan_x: 0,
        pan_y: 0,
        zoom: 1,
        side_panel_sections: {}
      }
    };
    var MIN_ZOOM2 = 0.1;
    var MAX_ZOOM2 = 12;
    var HOTKEY_COMMANDS2 = [
      { id: "graphfrontier-open-view", name: "Open GraphFrontier" },
      { id: "graphfrontier-toggle-pin-under-cursor", name: "Toggle pin under cursor" },
      {
        id: "graphfrontier-set-force-multiplier-under-cursor",
        name: "Set force multiplier under cursor"
      },
      {
        id: "graphfrontier-clear-force-multiplier-under-cursor",
        name: "Clear force multiplier under cursor"
      },
      { id: "graphfrontier-align-pins-to-grid", name: "Align pins to grid" },
      { id: "graphfrontier-pin-node-under-cursor", name: "Pin node under cursor" },
      { id: "graphfrontier-pin-to-grid-under-cursor", name: "Pin node to grid under cursor" },
      { id: "graphfrontier-unpin-node-under-cursor", name: "Unpin node under cursor" },
      {
        id: "graphfrontier-pin-linked-to-orbit-under-cursor",
        name: "Pin linked to orbit under cursor"
      },
      {
        id: "graphfrontier-toggle-selection-under-cursor",
        name: "Toggle selection under cursor"
      },
      {
        id: "graphfrontier-arm-box-selection",
        name: "Arm box selection"
      },
      {
        id: "graphfrontier-clear-selection",
        name: "Clear selection"
      },
      {
        id: "graphfrontier-export-static-html",
        name: "Export static graph to HTML"
      },
      { id: "graphfrontier-unpin-linked-nodes-under-cursor", name: "Unpin linked nodes under cursor" },
      { id: "graphfrontier-paint-edges-under-cursor", name: "Paint edges under cursor" },
      {
        id: "graphfrontier-clear-painted-edges-under-cursor",
        name: "Clear painted edges under cursor"
      },
      { id: "graphfrontier-strong-pull-under-cursor", name: "Strong pull under cursor" },
      { id: "graphfrontier-clear-strong-pull-under-cursor", name: "Clear strong pull under cursor" },
      { id: "graphfrontier-save-layout", name: "Save layout" },
      { id: "graphfrontier-load-layout", name: "Load layout" },
      { id: "graphfrontier-pin-all", name: "Pin all nodes" },
      { id: "graphfrontier-unpin-all", name: "Unpin all nodes" }
    ];
    var HOTKEY_COMMAND_IDS2 = new Set(HOTKEY_COMMANDS2.map((commandMeta) => commandMeta.id));
    var HOTKEY_MODIFIER_KEYS2 = /* @__PURE__ */ new Set(["control", "shift", "alt", "meta", "mod"]);
    var HOTKEY_KEY_ALIASES2 = {
      esc: "Escape",
      escape: "Escape",
      enter: "Enter",
      return: "Enter",
      tab: "Tab",
      space: "Space",
      spacebar: "Space",
      backspace: "Backspace",
      delete: "Delete",
      del: "Delete",
      up: "ArrowUp",
      down: "ArrowDown",
      left: "ArrowLeft",
      right: "ArrowRight",
      arrowup: "ArrowUp",
      arrowdown: "ArrowDown",
      arrowleft: "ArrowLeft",
      arrowright: "ArrowRight",
      plus: "+",
      minus: "-"
    };
    module2.exports = {
      GRAPHFRONTIER_VIEW_TYPE: GRAPHFRONTIER_VIEW_TYPE2,
      NODE_MULTIPLIER_MIN: NODE_MULTIPLIER_MIN2,
      NODE_MULTIPLIER_MAX: NODE_MULTIPLIER_MAX2,
      ZOOM_STEP_FACTOR: ZOOM_STEP_FACTOR2,
      TWO_PI,
      DEFAULT_DATA: DEFAULT_DATA2,
      MIN_ZOOM: MIN_ZOOM2,
      MAX_ZOOM: MAX_ZOOM2,
      HOTKEY_COMMANDS: HOTKEY_COMMANDS2,
      HOTKEY_COMMAND_IDS: HOTKEY_COMMAND_IDS2,
      HOTKEY_MODIFIER_KEYS: HOTKEY_MODIFIER_KEYS2,
      HOTKEY_KEY_ALIASES: HOTKEY_KEY_ALIASES2
    };
  }
});

// src/theme.js
var require_theme = __commonJS({
  "src/theme.js"(exports2, module2) {
    var DARK_THEME = Object.freeze({
      colorScheme: "dark",
      background: "#111418",
      surface: "#1e222a",
      text: "#e6e8ed",
      mutedText: "#9ea4af",
      border: "#454b55",
      selection: "#a6ccff",
      grid: "#9ea4af",
      gridOpacity: 0.2
    });
    function readGraphTheme(element) {
      var _a, _b;
      const doc = element == null ? void 0 : element.ownerDocument;
      const win = (doc == null ? void 0 : doc.defaultView) || (element == null ? void 0 : element.win);
      const isLight = !!(((_a = doc == null ? void 0 : doc.body) == null ? void 0 : _a.classList.contains("theme-light")) || ((_b = doc == null ? void 0 : doc.documentElement) == null ? void 0 : _b.classList.contains("theme-light")));
      const fallback = isLight ? {
        ...DARK_THEME,
        colorScheme: "light",
        background: "#ffffff",
        surface: "#f6f6f6",
        text: "#222222",
        mutedText: "#666666",
        border: "#d4d4d4",
        selection: "#375fb5",
        grid: "#666666"
      } : DARK_THEME;
      if (!element || !(win == null ? void 0 : win.getComputedStyle)) return { ...fallback };
      const styles = win.getComputedStyle(element);
      const color = (name, defaultColor) => styles.getPropertyValue(name).trim() || defaultColor;
      const text = color("--text-normal", fallback.text);
      const mutedText = color("--text-muted", fallback.mutedText);
      return {
        colorScheme: fallback.colorScheme,
        background: color("--background-primary", fallback.background),
        surface: color("--background-secondary", fallback.surface),
        text,
        mutedText,
        border: color("--background-modifier-border", fallback.border),
        selection: color("--text-accent", text),
        grid: mutedText,
        gridOpacity: fallback.gridOpacity
      };
    }
    function getLabelAppearance(zoom, minZoom, baseSize, nodeAlpha = 1, emphasized = false, minimumSize = 10) {
      const fontSize = Math.max(minimumSize, baseSize * zoom);
      if (emphasized) return { alpha: 1, fontSize };
      if (zoom < minZoom) return { alpha: 0, fontSize };
      const fade = Math.max(0, Math.min(1, (zoom - minZoom) / Math.max(1e-3, minZoom * 0.35)));
      const alpha = (0.65 + 0.35 * fade) * Math.max(0, Math.min(1, nodeAlpha));
      return { alpha: Math.max(0.45, alpha), fontSize };
    }
    module2.exports = { DARK_THEME, readGraphTheme, getLabelAppearance };
  }
});

// src/note-navigation.js
var require_note_navigation = __commonJS({
  "src/note-navigation.js"(exports2, module2) {
    var { Notice: Notice2 } = require("obsidian");
    async function openNoteTarget(app, type, target, hostWindow) {
      var _a, _b;
      const nodeRequire = typeof (hostWindow == null ? void 0 : hostWindow.require) === "function" ? hostWindow.require.bind(hostWindow) : null;
      if (type === "url") {
        let url;
        try {
          url = new URL(target);
        } catch (e) {
          throw new Error("Invalid URL in note properties");
        }
        if (!["http:", "https:"].includes(url.protocol))
          throw new Error("URL must use http:// or https://");
        if (nodeRequire) await nodeRequire("electron").shell.openExternal(url.href);
        else hostWindow.open(url.href, "_blank", "noopener,noreferrer");
        return;
      }
      const file = app.vault.getAbstractFileByPath(target);
      if (file && typeof file.extension === "string") {
        await app.workspace.getLeaf(true).openFile(file);
        return;
      }
      if (!nodeRequire) throw new Error("External files and folders require desktop Obsidian");
      const path = nodeRequire("path");
      if (path.sep !== "\\" && path.win32.isAbsolute(target) && !path.posix.isAbsolute(target)) {
        throw new Error("This Windows path is not available on this device");
      }
      if (target.startsWith("~/")) target = path.join(nodeRequire("os").homedir(), target.slice(2));
      const base = (_b = (_a = app.vault.adapter).getBasePath) == null ? void 0 : _b.call(_a);
      if (!path.isAbsolute(target) && !base) throw new Error("Cannot resolve the vault folder");
      const resolved = path.isAbsolute(target) ? target : path.resolve(base, target);
      try {
        await nodeRequire("fs").promises.stat(resolved);
      } catch (e) {
        throw new Error(`Path not found: ${target}`);
      }
      const error = await nodeRequire("electron").shell.openPath(resolved);
      if (error) throw new Error(error);
    }
    function addNoteNavigationActions(menu, app, file, hostWindow) {
      var _a;
      const frontmatter = (_a = app.metadataCache.getFileCache(file)) == null ? void 0 : _a.frontmatter;
      if (!frontmatter) return;
      for (const [key, title, icon] of [
        ["url", "Open URL", "external-link"],
        ["path", "Open path", "folder-open"]
      ]) {
        const value = frontmatter[key];
        if (typeof value !== "string" || !value.trim()) continue;
        menu.addItem(
          (item) => item.setTitle(title).setIcon(icon).onClick(async () => {
            try {
              await openNoteTarget(app, key, value.trim(), hostWindow);
            } catch (error) {
              new Notice2(`Cannot open ${key}: ${error.message}`);
            }
          })
        );
      }
    }
    module2.exports = { addNoteNavigationActions, openNoteTarget };
  }
});

// src/node-context-menu.js
var require_node_context_menu = __commonJS({
  "src/node-context-menu.js"(exports2, module2) {
    var { Menu, Notice: Notice2 } = require("obsidian");
    var { openNoteTarget } = require_note_navigation();
    function buildNodeContextMenu(view, node, clientX, clientY) {
      var _a, _b, _c, _d;
      const { app, plugin } = view;
      const menu = new Menu(app);
      const file = app.vault.getAbstractFileByPath(node.id);
      const isFile = !!file && typeof file.extension === "string";
      const nativeMenu = new Menu(app);
      if (isFile) (_b = (_a = app.workspace).trigger) == null ? void 0 : _b.call(_a, "file-menu", nativeMenu, file, "graphfrontier", view.leaf);
      const add = (target, title, icon, callback, enabled = true) => {
        if (!enabled) return null;
        let added;
        target.addItem((item) => {
          added = item;
          item.setTitle(title).setIcon(icon).onClick(async (event) => {
            try {
              await callback(event);
            } catch (error) {
              new Notice2(`${title}: ${error.message}`);
            }
          });
        });
        return added;
      };
      const submenu = (title, icon, fillSubmenu, enabled = true) => {
        if (!enabled) return;
        view.addContextSubmenuItem(menu, {
          title,
          icon,
          clientX,
          clientY,
          fillSubmenu
        });
      };
      const nativeAction = (target, title, icon, pattern) => {
        const original = nativeMenu.items.find((item) => pattern.test(view.getMenuItemTitleText(item)));
        add(
          target,
          title,
          icon,
          (event) => original.callback(event),
          typeof (original == null ? void 0 : original.callback) === "function" && !original.disabled
        );
      };
      const unpin = () => {
        plugin.removePin(node.id);
        plugin.removeOrbitPin(node.id);
        view.kickLayoutSearch();
      };
      const pinned = plugin.isPinned(node.id) || plugin.isOrbitPinned(node.id);
      const linkedIds = view.getLinkedNodeIds(node.id);
      const hasLinked = linkedIds.length > 0;
      const hasLinkedPins = linkedIds.some((id) => plugin.isPinned(id) || plugin.isOrbitPinned(id));
      const copy = async (text) => {
        if (!await view.copyTextToClipboard(text)) throw new Error("Clipboard is unavailable");
      };
      add(
        menu,
        "Copy system root",
        "hard-drive",
        () => copy(app.vault.adapter.getFullPath(file.path)),
        isFile && typeof app.vault.adapter.getFullPath === "function"
      );
      submenu(
        "Copy",
        "copy",
        (target) => {
          add(
            target,
            "As Obsidian URL",
            "link",
            () => app.copyObsidianUrl(file),
            isFile && typeof app.copyObsidianUrl === "function"
          );
          add(target, "From vault folder", "vault", () => copy(file.path), isFile);
          add(target, "Copy linked names", "copy", () => view.copyLinkedNames(node.id), hasLinked);
          add(target, "Copy linked paths", "copy", () => view.copyLinkedPaths(node.id), hasLinked);
        },
        isFile || hasLinked
      );
      if (isFile) menu.addSeparator();
      const properties = isFile ? (_c = app.metadataCache.getFileCache(file)) == null ? void 0 : _c.frontmatter : null;
      for (const [key, title, icon] of [
        ["path", "Open path", "folder-open"],
        ["url", "Open URL", "external-link"]
      ]) {
        const value = properties == null ? void 0 : properties[key];
        add(
          menu,
          title,
          icon,
          () => openNoteTarget(app, key, value.trim(), view.contentEl.win),
          typeof value === "string" && !!value.trim()
        );
      }
      submenu(
        "Open",
        "folder-open",
        (target) => {
          var _a2;
          add(target, "Open in same tab", "file", () => view.leaf.openFile(file), isFile);
          nativeAction(
            target,
            "Open in new window",
            "picture-in-picture-2",
            /open in (a )?new window/i
          );
          add(
            target,
            "Open in default app",
            "external-link",
            () => app.openWithDefaultApp(file.path),
            isFile && typeof app.openWithDefaultApp === "function"
          );
          add(
            target,
            "Show in system explorer",
            "folder-open",
            () => app.showInFolder(file.path),
            isFile && typeof app.showInFolder === "function"
          );
          const explorer = app.workspace.getLeavesOfType("file-explorer")[0];
          add(
            target,
            "Reveal file in navigation",
            "folder-search",
            async () => {
              await app.workspace.revealLeaf(explorer);
              await explorer.view.revealInFolder(file);
            },
            isFile && typeof ((_a2 = explorer == null ? void 0 : explorer.view) == null ? void 0 : _a2.revealInFolder) === "function"
          );
        },
        isFile
      );
      if (menu.items.length) menu.addSeparator();
      add(
        menu,
        "Pin node",
        "pin",
        () => view.pinNodeExact(node.id, { x: node.x, y: node.y }),
        !plugin.isPinned(node.id) || plugin.getPinMode(node.id) !== "exact"
      );
      add(
        menu,
        "Pin to grid",
        "grid",
        () => view.pinNodeToGrid(node.id, { x: node.x, y: node.y }),
        !plugin.isPinned(node.id) || plugin.getPinMode(node.id) !== "grid"
      );
      submenu(
        "Pin linked",
        "git-branch",
        (target) => {
          add(target, "Pin linked nodes", "pin", () => view.pinLinkedNodes(node.id));
          add(target, "Pin linked nodes to grid", "grid", () => view.pinLinkedNodesToGrid(node.id));
          add(target, "Pin linked nodes to orbit", "orbit", () => view.pinLinkedNodesToOrbit(node.id));
          add(target, "Unpin node", "pin-off", unpin, pinned);
          add(
            target,
            "Unpin linked nodes",
            "pin-off",
            () => view.unpinLinkedNodes(node.id),
            hasLinkedPins
          );
        },
        hasLinked
      );
      add(menu, "Unpin node", "pin-off", unpin, pinned);
      menu.addSeparator();
      submenu("Visual settings", "settings-2", (target) => {
        view.addVisualSettingsToMenu(target, node, clientX, clientY);
      });
      menu.addSeparator();
      add(
        menu,
        "Select linked nodes",
        "check-square",
        () => view.selectLinkedNodes(node.id),
        hasLinked
      );
      nativeAction(menu, "Bookmark", "bookmark", /bookmark/i);
      submenu("Other", "ellipsis", (target) => {
        nativeAction(target, "Move file to", "folder-input", /move file to/i);
        nativeAction(target, "Bookmark", "bookmark", /bookmark/i);
        nativeAction(target, "Merge entire file with", "git-merge", /merge (entire )?file/i);
        add(
          target,
          "Add to search",
          "search",
          () => view.applySearchSelectionFromNode(node, { forceSource: "name" })
        );
        add(
          target,
          "Show local graph",
          "dot-network",
          () => view.openLocalGraphForNode(node.id),
          isFile && file.extension.toLowerCase() === "md"
        );
      });
      const canDelete = isFile && typeof ((_d = app.fileManager) == null ? void 0 : _d.promptForDeletion) === "function";
      if (canDelete) menu.addSeparator();
      const deleteItem = add(
        menu,
        "Delete",
        "trash-2",
        () => app.fileManager.promptForDeletion(file),
        canDelete
      );
      deleteItem == null ? void 0 : deleteItem.setWarning(true);
      return menu;
    }
    module2.exports = { buildNodeContextMenu };
  }
});

// src/physics.js
var require_physics = __commonJS({
  "src/physics.js"(exports2, module2) {
    var { TWO_PI, DEFAULT_DATA: DEFAULT_DATA2 } = require_constants();
    var layoutAutosaveStates = /* @__PURE__ */ new WeakMap();
    function stepLayoutAutosave(view, moving = false) {
      if (!view.layoutAutosaveDirty || !view.plugin.getSettings().layout_autosave || view.isSearchFilled() || view.dragNodeId || view.dragSelectionOffsets instanceof Map && view.dragSelectionOffsets.size > 0) {
        view.layoutStillFrames = 0;
        return;
      }
      view.layoutStillFrames = moving ? 0 : Math.min(8, view.layoutStillFrames + 1);
      if (view.layoutStillFrames < 8) return;
      let state = layoutAutosaveStates.get(view);
      if (!state) {
        state = { inFlight: false, retryAtMs: 0 };
        layoutAutosaveStates.set(view, state);
      }
      if (state.inFlight || Date.now() < state.retryAtMs) return;
      state.inFlight = true;
      void (async () => {
        try {
          await view.saveCurrentLayout({ silent: true });
        } catch (e) {
        } finally {
          state.inFlight = false;
          state.retryAtMs = Date.now() + 1e3;
        }
      })();
    }
    function kickLayoutSearch(view) {
      view.layoutKickAtMs = Date.now();
      view.layoutStillFrames = 0;
      view.layoutAutosaveDirty = true;
      view.layoutPaused = false;
    }
    function buildSpatialIndex(nodes, cellSize) {
      const safeCellSize = Math.max(1, Number(cellSize) || 1);
      const buckets = /* @__PURE__ */ new Map();
      const bucketList = [];
      for (const node of nodes) {
        const gx = Math.floor(node.x / safeCellSize);
        const gy = Math.floor(node.y / safeCellSize);
        const key = `${gx}:${gy}`;
        let bucket = buckets.get(key);
        if (!bucket) {
          bucket = { gx, gy, index: bucketList.length, nodes: [] };
          buckets.set(key, bucket);
          bucketList.push(bucket);
        }
        bucket.nodes.push(node);
      }
      return { buckets, bucketList, cellSize: safeCellSize };
    }
    function forEachNearbyNodePair(spatialIndex, radius, callback) {
      if (!spatialIndex || !spatialIndex.bucketList || spatialIndex.bucketList.length === 0) return;
      const searchRadius = Math.max(1, Number(radius) || 1);
      const bucketRange = Math.max(1, Math.ceil(searchRadius / spatialIndex.cellSize));
      for (const bucketA of spatialIndex.bucketList) {
        for (let offsetX = -bucketRange; offsetX <= bucketRange; offsetX += 1) {
          for (let offsetY = -bucketRange; offsetY <= bucketRange; offsetY += 1) {
            const bucketB = spatialIndex.buckets.get(`${bucketA.gx + offsetX}:${bucketA.gy + offsetY}`);
            if (!bucketB || bucketB.index < bucketA.index) continue;
            if (bucketA === bucketB) {
              for (let indexA = 0; indexA < bucketA.nodes.length; indexA += 1) {
                for (let indexB = indexA + 1; indexB < bucketA.nodes.length; indexB += 1) {
                  callback(bucketA.nodes[indexA], bucketA.nodes[indexB]);
                }
              }
              continue;
            }
            for (const nodeA of bucketA.nodes) {
              for (const nodeB of bucketB.nodes) {
                callback(nodeA, nodeB);
              }
            }
          }
        }
      }
    }
    function forEachNearbyNodeFromIndex(spatialIndex, sourceNode, radius, callback) {
      if (!spatialIndex || !sourceNode) return;
      const searchRadius = Math.max(1, Number(radius) || 1);
      const bucketRange = Math.max(1, Math.ceil(searchRadius / spatialIndex.cellSize));
      const sourceGX = Math.floor(sourceNode.x / spatialIndex.cellSize);
      const sourceGY = Math.floor(sourceNode.y / spatialIndex.cellSize);
      for (let offsetX = -bucketRange; offsetX <= bucketRange; offsetX += 1) {
        for (let offsetY = -bucketRange; offsetY <= bucketRange; offsetY += 1) {
          const bucket = spatialIndex.buckets.get(`${sourceGX + offsetX}:${sourceGY + offsetY}`);
          if (!bucket) continue;
          for (const targetNode of bucket.nodes) callback(targetNode);
        }
      }
    }
    function updateLayoutCenter(view, nodesForCenter = view.nodes, degreeById = null) {
      var _a;
      const sourceNodes = Array.isArray(nodesForCenter) ? nodesForCenter : view.nodes;
      if (sourceNodes.length === 0) {
        view.layoutCenter.x = 0;
        view.layoutCenter.y = 0;
        return;
      }
      let sumMainX = 0;
      let sumMainY = 0;
      let mainCount = 0;
      for (const node of sourceNodes) {
        const isAttachment = !!((_a = node == null ? void 0 : node.meta) == null ? void 0 : _a.isAttachment);
        const degree = degreeById instanceof Map ? Number(degreeById.get(node.id) || 0) : Number(node.degree || 0);
        const isOrphan = degree === 0;
        if (isAttachment || isOrphan) continue;
        sumMainX += node.x;
        sumMainY += node.y;
        mainCount += 1;
      }
      if (mainCount > 0) {
        view.layoutCenter.x = sumMainX / mainCount;
        view.layoutCenter.y = sumMainY / mainCount;
        return;
      }
      let sumAllX = 0;
      let sumAllY = 0;
      for (const node of sourceNodes) {
        sumAllX += node.x;
        sumAllY += node.y;
      }
      view.layoutCenter.x = sumAllX / sourceNodes.length;
      view.layoutCenter.y = sumAllY / sourceNodes.length;
    }
    function stepCameraSmoothing(view) {
      const smooth = 0.22;
      view.camera.x += (view.cameraTarget.x - view.camera.x) * smooth;
      view.camera.y += (view.cameraTarget.y - view.camera.y) * smooth;
      view.camera.zoom += (view.cameraTarget.zoom - view.camera.zoom) * smooth;
    }
    function stepSimulation(view) {
      var _a, _b, _c, _d, _e, _f;
      if (view.nodes.length === 0) {
        stepLayoutAutosave(view);
        return;
      }
      if (view.layoutPaused && !view.dragNodeId) {
        stepLayoutAutosave(view);
        return;
      }
      const filterVisibleNodeIds = view.getFilterVisibleNodeIds();
      const hasPhysicsFilter = filterVisibleNodeIds instanceof Set;
      if (hasPhysicsFilter) {
        for (const node of view.nodes) {
          if (filterVisibleNodeIds.has(node.id)) continue;
          node.vx = 0;
          node.vy = 0;
        }
      }
      const nodes = hasPhysicsFilter ? view.nodes.filter((node) => filterVisibleNodeIds.has(node.id)) : view.nodes;
      const nodeCount = nodes.length;
      if (nodeCount === 0) {
        stepLayoutAutosave(view);
        return;
      }
      const localDegreeById = hasPhysicsFilter ? new Map(nodes.map((node) => [node.id, 0])) : null;
      if (localDegreeById) {
        for (const edge of view.edges) {
          if (!localDegreeById.has(edge.source) || !localDegreeById.has(edge.target)) continue;
          localDegreeById.set(edge.source, Number(localDegreeById.get(edge.source) || 0) + 1);
          localDegreeById.set(edge.target, Number(localDegreeById.get(edge.target) || 0) + 1);
        }
      }
      const getNodeDegree = (node) => localDegreeById instanceof Map ? Number(localDegreeById.get(node.id) || 0) : Number(node.degree || 0);
      updateLayoutCenter(view, nodes, localDegreeById);
      const settings = view.plugin.getSettings();
      const attachmentIsolationMode = settings.attachments_on_orbits !== false;
      const nowMs = Date.now();
      const layoutSearchMs = 3e3;
      const elapsedSearchMs = nowMs - view.layoutKickAtMs;
      const layoutSearchFactor = 1;
      const settleProgress = view.dragNodeId ? 0 : Math.max(0, Math.min(1, elapsedSearchMs / layoutSearchMs));
      const settleVelocityBrake = 1 - settleProgress * 0.7;
      const repelStrength = settings.repel_strength * 1 * layoutSearchFactor;
      const centerStrength = settings.center_strength * 25e-6 * layoutSearchFactor;
      const baseLinkStrength = settings.base_link_strength * 15e-5 * layoutSearchFactor;
      const linkDistance = view.plugin.clampNumber(
        settings.link_distance,
        1,
        50,
        DEFAULT_DATA2.settings.link_distance
      );
      const attachmentLinkDistance = view.plugin.clampNumber(
        settings.attachment_link_distance_multiplier,
        1,
        100,
        DEFAULT_DATA2.settings.attachment_link_distance_multiplier
      );
      const damping = view.plugin.clampNumber(
        settings.damping,
        0.01,
        0.9,
        DEFAULT_DATA2.settings.damping
      );
      const repelRadius = view.plugin.clampNumber(
        settings.repel_radius,
        20,
        500,
        DEFAULT_DATA2.settings.repel_radius
      );
      const orphanRepelRadius = repelRadius * 1.25;
      const orphanToMainRepelRadius = repelRadius * 1.25;
      const repelRadiusSq = repelRadius * repelRadius;
      const orphanRepelRadiusSq = orphanRepelRadius * orphanRepelRadius;
      const orphanToMainRepelRadiusSq = orphanToMainRepelRadius * orphanToMainRepelRadius;
      const hasRepel = repelStrength > 0;
      const hasCenter = centerStrength > 0;
      let hasLink = baseLinkStrength > 0 && view.edges.length > 0;
      if (hasLink && hasPhysicsFilter) {
        hasLink = view.edges.some(
          (edge) => filterVisibleNodeIds.has(edge.source) && filterVisibleNodeIds.has(edge.target)
        );
      }
      const noForces = !hasRepel && !hasCenter && !hasLink;
      const minRepelDistance = 28;
      const maxRepelForce = 16;
      const maxSpringForce = 20;
      const maxCenterForce = 1.6;
      const maxAccel = 6;
      const maxSpeed = 26;
      const impulseGain = 7;
      const degreeMassFactor = 0.25;
      const orphanRepelScale = 1.2;
      const orphanToMainRepelScale = 5.2;
      const attachmentOnlyRepelScale = 0.85;
      const attachmentOnlyToMainRepelScale = 3.6;
      const regularBackReactionScale = 0.06;
      const attachmentOnlyBackReactionScale = 0.04;
      const orphanCenterScale = 1;
      const oneSecondRetention = Math.pow(0.01, 1 / 60);
      const dampingRetention = 1 - damping * 0.95;
      const velocityRetention = Math.max(0.05, Math.min(0.995, oneSecondRetention * dampingRetention));
      const settleVelocityEps = 0.02;
      const settleAccelEps = 0.02;
      const accelById = /* @__PURE__ */ new Map();
      for (const node of nodes) accelById.set(node.id, { ax: 0, ay: 0 });
      const pinsById = /* @__PURE__ */ new Map();
      for (const node of nodes) {
        const pin = view.plugin.getPin(node.id);
        if (pin) pinsById.set(node.id, pin);
      }
      const orbitPinsById = /* @__PURE__ */ new Map();
      for (const node of nodes) {
        const orbitPin = view.plugin.getOrbitPin(node.id);
        if (!orbitPin) continue;
        const anchorNode = view.nodeById.get(orbitPin.anchor_id);
        if (!anchorNode) continue;
        orbitPinsById.set(node.id, orbitPin);
      }
      const orbitNodeIds = new Set(orbitPinsById.keys());
      const fixedNodeIds = /* @__PURE__ */ new Set([...pinsById.keys(), ...orbitNodeIds]);
      const autoAttachmentOrbitById = buildAttachmentAutoOrbitMap(
        view,
        hasPhysicsFilter ? filterVisibleNodeIds : null
      );
      const attachmentMainById = attachmentIsolationMode ? buildAttachmentMainNodeMap(view, nodes, hasPhysicsFilter ? filterVisibleNodeIds : null) : /* @__PURE__ */ new Map();
      const autoAttachmentOrbitNodeIds = new Set(autoAttachmentOrbitById.keys());
      const activelyDraggedNodeIds = /* @__PURE__ */ new Set();
      if (view.dragNodeId) activelyDraggedNodeIds.add(view.dragNodeId);
      if (view.dragSelectionOffsets instanceof Map) {
        for (const nodeId of view.dragSelectionOffsets.keys()) {
          if (!nodeId) continue;
          activelyDraggedNodeIds.add(nodeId);
        }
      }
      const hasMovableNodes = nodes.some(
        (node) => !fixedNodeIds.has(node.id) && !autoAttachmentOrbitNodeIds.has(node.id) && !activelyDraggedNodeIds.has(node.id)
      );
      if (!view.dragNodeId && !hasMovableNodes) {
        view.layoutPaused = true;
        stepLayoutAutosave(view);
        return;
      }
      const freeOrphanNodes = [];
      const attachmentOnlyAnchorNodes = [];
      const attachmentOnlyAnchorIds = /* @__PURE__ */ new Set();
      const mainNodesForOrphanRepel = [];
      for (const node of nodes) {
        if (fixedNodeIds.has(node.id)) continue;
        const nodeDegree = getNodeDegree(node);
        if (autoAttachmentOrbitNodeIds.has(node.id)) continue;
        if (nodeDegree === 0) {
          if (!attachmentIsolationMode || !((_a = node == null ? void 0 : node.meta) == null ? void 0 : _a.isAttachment)) freeOrphanNodes.push(node);
        }
        if (nodeDegree > 0 && !((_b = node == null ? void 0 : node.meta) == null ? void 0 : _b.isAttachment)) {
          const neighborIds = view.neighborsById.get(node.id);
          if (!neighborIds || neighborIds.size === 0) {
            mainNodesForOrphanRepel.push(node);
            continue;
          }
          let hasRegularNeighbor = false;
          for (const neighborId of neighborIds) {
            if (hasPhysicsFilter && !filterVisibleNodeIds.has(neighborId)) continue;
            const neighborNode = view.nodeById.get(neighborId);
            if (!neighborNode) continue;
            if (!((_c = neighborNode.meta) == null ? void 0 : _c.isAttachment)) {
              hasRegularNeighbor = true;
              break;
            }
          }
          if (!hasRegularNeighbor) {
            attachmentOnlyAnchorNodes.push(node);
            attachmentOnlyAnchorIds.add(node.id);
            continue;
          }
          mainNodesForOrphanRepel.push(node);
        }
      }
      let movingNodeCount = 0;
      if (hasRepel) {
        const nodeSpatialIndex = buildSpatialIndex(nodes, repelRadius);
        forEachNearbyNodePair(nodeSpatialIndex, repelRadius, (nodeA, nodeB) => {
          var _a2, _b2;
          if (attachmentIsolationMode) {
            const nodeAIsAttachment = !!((_a2 = nodeA == null ? void 0 : nodeA.meta) == null ? void 0 : _a2.isAttachment);
            const nodeBIsAttachment = !!((_b2 = nodeB == null ? void 0 : nodeB.meta) == null ? void 0 : _b2.isAttachment);
            if (nodeAIsAttachment !== nodeBIsAttachment) return;
            if (nodeAIsAttachment && nodeBIsAttachment) {
              const mainA = attachmentMainById.get(nodeA.id) || "";
              const mainB = attachmentMainById.get(nodeB.id) || "";
              if (!mainA || !mainB || mainA !== mainB) return;
            }
          }
          if (autoAttachmentOrbitNodeIds.has(nodeA.id) || autoAttachmentOrbitNodeIds.has(nodeB.id))
            return;
          if (fixedNodeIds.has(nodeA.id) || fixedNodeIds.has(nodeB.id)) return;
          if (getNodeDegree(nodeA) === 0 || getNodeDegree(nodeB) === 0) return;
          if (attachmentOnlyAnchorIds.has(nodeA.id) || attachmentOnlyAnchorIds.has(nodeB.id)) return;
          const nodeAIsOrbitPinned = orbitNodeIds.has(nodeA.id);
          const nodeBIsOrbitPinned = orbitNodeIds.has(nodeB.id);
          if (nodeAIsOrbitPinned && nodeBIsOrbitPinned) return;
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > repelRadiusSq) return;
          const dist = Math.sqrt(distSq) || 1e-4;
          const safeDist = Math.max(minRepelDistance, dist);
          const force = Math.min(maxRepelForce, repelStrength / (safeDist * safeDist));
          const fx = dx / dist * force;
          const fy = dy / dist * force;
          const a = accelById.get(nodeA.id);
          const b = accelById.get(nodeB.id);
          if (!nodeAIsOrbitPinned) {
            a.ax -= fx;
            a.ay -= fy;
          }
          if (!nodeBIsOrbitPinned) {
            b.ax += fx;
            b.ay += fy;
          }
        });
        const orphanRepelStrength = repelStrength * orphanRepelScale;
        if (orphanRepelStrength > 0 && freeOrphanNodes.length > 1) {
          const orphanSpatialIndex = buildSpatialIndex(freeOrphanNodes, orphanRepelRadius);
          forEachNearbyNodePair(orphanSpatialIndex, orphanRepelRadius, (nodeA, nodeB) => {
            const dx = nodeB.x - nodeA.x;
            const dy = nodeB.y - nodeA.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > orphanRepelRadiusSq) return;
            const dist = Math.sqrt(distSq) || 1e-4;
            const safeDist = Math.max(minRepelDistance, dist);
            const force = Math.min(maxRepelForce, orphanRepelStrength / (safeDist * safeDist));
            const fx = dx / dist * force;
            const fy = dy / dist * force;
            const a = accelById.get(nodeA.id);
            const b = accelById.get(nodeB.id);
            a.ax -= fx;
            a.ay -= fy;
            b.ax += fx;
            b.ay += fy;
          });
        }
        const attachmentOnlyRepelStrength = repelStrength * attachmentOnlyRepelScale;
        if (attachmentOnlyRepelStrength > 0 && attachmentOnlyAnchorNodes.length > 1) {
          const attachmentOnlySpatialIndex = buildSpatialIndex(
            attachmentOnlyAnchorNodes,
            orphanRepelRadius
          );
          forEachNearbyNodePair(attachmentOnlySpatialIndex, orphanRepelRadius, (nodeA, nodeB) => {
            const nodeAIsOrbitPinned = orbitNodeIds.has(nodeA.id);
            const nodeBIsOrbitPinned = orbitNodeIds.has(nodeB.id);
            if (nodeAIsOrbitPinned && nodeBIsOrbitPinned) return;
            const dx = nodeB.x - nodeA.x;
            const dy = nodeB.y - nodeA.y;
            const distSq = dx * dx + dy * dy;
            if (distSq > orphanRepelRadiusSq) return;
            const dist = Math.sqrt(distSq) || 1e-4;
            const safeDist = Math.max(minRepelDistance, dist);
            const force = Math.min(maxRepelForce, attachmentOnlyRepelStrength / (safeDist * safeDist));
            const fx = dx / dist * force;
            const fy = dy / dist * force;
            const a = accelById.get(nodeA.id);
            const b = accelById.get(nodeB.id);
            if (!nodeAIsOrbitPinned) {
              a.ax -= fx;
              a.ay -= fy;
            }
            if (!nodeBIsOrbitPinned) {
              b.ax += fx;
              b.ay += fy;
            }
          });
        }
        const orphanToAttachmentOnlyRepelStrength = repelStrength * ((orphanRepelScale + attachmentOnlyRepelScale) / 2);
        if (orphanToAttachmentOnlyRepelStrength > 0 && freeOrphanNodes.length > 0 && attachmentOnlyAnchorNodes.length > 0) {
          const attachmentOnlySpatialIndex = buildSpatialIndex(
            attachmentOnlyAnchorNodes,
            orphanRepelRadius
          );
          for (const orphanNode of freeOrphanNodes) {
            forEachNearbyNodeFromIndex(
              attachmentOnlySpatialIndex,
              orphanNode,
              orphanRepelRadius,
              (attachmentOnlyNode) => {
                const attachmentOnlyIsOrbitPinned = orbitNodeIds.has(attachmentOnlyNode.id);
                const dx = attachmentOnlyNode.x - orphanNode.x;
                const dy = attachmentOnlyNode.y - orphanNode.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > orphanRepelRadiusSq) return;
                const dist = Math.sqrt(distSq) || 1e-4;
                const safeDist = Math.max(minRepelDistance, dist);
                const force = Math.min(
                  maxRepelForce,
                  orphanToAttachmentOnlyRepelStrength / (safeDist * safeDist)
                );
                const fx = dx / dist * force;
                const fy = dy / dist * force;
                const orphanAccel = accelById.get(orphanNode.id);
                const attachmentOnlyAccel = accelById.get(attachmentOnlyNode.id);
                orphanAccel.ax -= fx;
                orphanAccel.ay -= fy;
                if (!attachmentOnlyIsOrbitPinned) {
                  attachmentOnlyAccel.ax += fx;
                  attachmentOnlyAccel.ay += fy;
                }
              }
            );
          }
        }
        const orphanToMainRepelStrength = repelStrength * orphanToMainRepelScale;
        if (orphanToMainRepelStrength > 0 && freeOrphanNodes.length > 0 && mainNodesForOrphanRepel.length > 0) {
          const mainSpatialIndex = buildSpatialIndex(mainNodesForOrphanRepel, orphanToMainRepelRadius);
          for (const orphanNode of freeOrphanNodes) {
            forEachNearbyNodeFromIndex(
              mainSpatialIndex,
              orphanNode,
              orphanToMainRepelRadius,
              (mainNode) => {
                const dx = mainNode.x - orphanNode.x;
                const dy = mainNode.y - orphanNode.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > orphanToMainRepelRadiusSq) return;
                const dist = Math.sqrt(distSq) || 1e-4;
                const safeDist = Math.max(minRepelDistance, dist);
                const force = Math.min(
                  maxRepelForce,
                  orphanToMainRepelStrength / (safeDist * safeDist)
                );
                const fx = dx / dist * force;
                const fy = dy / dist * force;
                const orphanAccel = accelById.get(orphanNode.id);
                const regularAccel = accelById.get(mainNode.id);
                const mainIsOrbitPinned = orbitNodeIds.has(mainNode.id);
                orphanAccel.ax -= fx;
                orphanAccel.ay -= fy;
                if (!mainIsOrbitPinned) {
                  regularAccel.ax += fx * regularBackReactionScale;
                  regularAccel.ay += fy * regularBackReactionScale;
                }
              }
            );
          }
        }
        const attachmentOnlyToMainRepelStrength = repelStrength * attachmentOnlyToMainRepelScale;
        if (attachmentOnlyToMainRepelStrength > 0 && attachmentOnlyAnchorNodes.length > 0 && mainNodesForOrphanRepel.length > 0) {
          const mainSpatialIndex = buildSpatialIndex(mainNodesForOrphanRepel, orphanToMainRepelRadius);
          for (const attachmentOnlyNode of attachmentOnlyAnchorNodes) {
            const attachmentOnlyIsOrbitPinned = orbitNodeIds.has(attachmentOnlyNode.id);
            forEachNearbyNodeFromIndex(
              mainSpatialIndex,
              attachmentOnlyNode,
              orphanToMainRepelRadius,
              (mainNode) => {
                const dx = mainNode.x - attachmentOnlyNode.x;
                const dy = mainNode.y - attachmentOnlyNode.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > orphanToMainRepelRadiusSq) return;
                const dist = Math.sqrt(distSq) || 1e-4;
                const safeDist = Math.max(minRepelDistance, dist);
                const force = Math.min(
                  maxRepelForce,
                  attachmentOnlyToMainRepelStrength / (safeDist * safeDist)
                );
                const fx = dx / dist * force;
                const fy = dy / dist * force;
                const attachmentOnlyAccel = accelById.get(attachmentOnlyNode.id);
                const regularAccel = accelById.get(mainNode.id);
                const mainIsOrbitPinned = orbitNodeIds.has(mainNode.id);
                if (!attachmentOnlyIsOrbitPinned) {
                  attachmentOnlyAccel.ax -= fx;
                  attachmentOnlyAccel.ay -= fy;
                }
                if (!mainIsOrbitPinned) {
                  regularAccel.ax += fx * attachmentOnlyBackReactionScale;
                  regularAccel.ay += fy * attachmentOnlyBackReactionScale;
                }
              }
            );
          }
        }
      }
      if (hasLink) {
        for (const edge of view.edges) {
          if (hasPhysicsFilter && (!filterVisibleNodeIds.has(edge.source) || !filterVisibleNodeIds.has(edge.target))) {
            continue;
          }
          const sourceNode = view.nodeById.get(edge.source);
          const targetNode = view.nodeById.get(edge.target);
          if (!sourceNode || !targetNode) continue;
          const sourceIsFixed = fixedNodeIds.has(sourceNode.id);
          const targetIsFixed = fixedNodeIds.has(targetNode.id);
          if (sourceIsFixed && targetIsFixed) continue;
          const sourceIsAttachment = !!((_d = sourceNode.meta) == null ? void 0 : _d.isAttachment);
          const targetIsAttachment = !!((_e = targetNode.meta) == null ? void 0 : _e.isAttachment);
          if (attachmentIsolationMode && (sourceIsAttachment || targetIsAttachment)) {
            if (sourceIsAttachment && targetIsAttachment) continue;
            const attachmentNode = sourceIsAttachment ? sourceNode : targetNode;
            const regularNode = sourceIsAttachment ? targetNode : sourceNode;
            const mainNodeId = attachmentMainById.get(attachmentNode.id) || "";
            if (!mainNodeId || regularNode.id !== mainNodeId) continue;
          }
          if (autoAttachmentOrbitNodeIds.has(sourceNode.id) || autoAttachmentOrbitNodeIds.has(targetNode.id))
            continue;
          const dx = targetNode.x - sourceNode.x;
          const dy = targetNode.y - sourceNode.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const sourceMultiplier = view.plugin.getNodeMultiplier(sourceNode.id);
          const targetMultiplier = view.plugin.getNodeMultiplier(targetNode.id);
          const edgeMultiplier = Math.max(sourceMultiplier, targetMultiplier);
          const hasAttachmentInEdge = sourceIsAttachment || targetIsAttachment;
          const edgeTargetDistance = hasAttachmentInEdge ? attachmentLinkDistance : linkDistance;
          const stretch = dist - edgeTargetDistance;
          const springForceRaw = baseLinkStrength * edgeMultiplier * stretch;
          const springForce = Math.max(-maxSpringForce, Math.min(maxSpringForce, springForceRaw));
          const fx = dx / dist * springForce;
          const fy = dy / dist * springForce;
          const sourceMass = 1 + Math.max(0, getNodeDegree(sourceNode) - 1) * degreeMassFactor;
          const targetMass = 1 + Math.max(0, getNodeDegree(targetNode) - 1) * degreeMassFactor;
          const sourceAccel = accelById.get(sourceNode.id);
          const targetAccel = accelById.get(targetNode.id);
          let sourceReceivesForce = !sourceIsFixed;
          let targetReceivesForce = !targetIsFixed;
          if (attachmentIsolationMode && sourceIsAttachment !== targetIsAttachment) {
            sourceReceivesForce = sourceReceivesForce && sourceIsAttachment;
            targetReceivesForce = targetReceivesForce && targetIsAttachment;
          }
          if (sourceReceivesForce) {
            sourceAccel.ax += fx / sourceMass;
            sourceAccel.ay += fy / sourceMass;
          }
          if (targetReceivesForce) {
            targetAccel.ax -= fx / targetMass;
            targetAccel.ay -= fy / targetMass;
          }
        }
      }
      for (const node of nodes) {
        const pin = pinsById.get(node.id) || null;
        const orbitPin = orbitPinsById.get(node.id) || null;
        const autoAttachmentOrbit = autoAttachmentOrbitById.get(node.id) || null;
        const accel = accelById.get(node.id) || { ax: 0, ay: 0 };
        const isAttachmentNode = !!((_f = node == null ? void 0 : node.meta) == null ? void 0 : _f.isAttachment);
        if (hasCenter && !pin && !orbitPin && !autoAttachmentOrbit && node.id !== view.dragNodeId && !(attachmentIsolationMode && isAttachmentNode)) {
          const nodeCenterScale = getNodeDegree(node) === 0 ? orphanCenterScale : 1;
          const centerFx = (0 - node.x) * centerStrength * nodeCenterScale;
          const centerFy = (0 - node.y) * centerStrength * nodeCenterScale;
          accel.ax += Math.max(-maxCenterForce, Math.min(maxCenterForce, centerFx));
          accel.ay += Math.max(-maxCenterForce, Math.min(maxCenterForce, centerFy));
        }
        if (activelyDraggedNodeIds.has(node.id)) {
          node.vx = 0;
          node.vy = 0;
          continue;
        }
        if (pin) {
          node.x = pin.x;
          node.y = pin.y;
          node.vx = 0;
          node.vy = 0;
          continue;
        }
        if (orbitPin) {
          const anchorNode = view.nodeById.get(orbitPin.anchor_id);
          if (anchorNode) {
            node.x = anchorNode.x + Math.cos(orbitPin.angle) * orbitPin.radius;
            node.y = anchorNode.y + Math.sin(orbitPin.angle) * orbitPin.radius;
          }
          node.vx = 0;
          node.vy = 0;
          continue;
        }
        if (autoAttachmentOrbit) {
          const anchorNode = view.nodeById.get(autoAttachmentOrbit.anchor_id);
          if (anchorNode) {
            node.x = anchorNode.x + Math.cos(autoAttachmentOrbit.angle) * autoAttachmentOrbit.radius;
            node.y = anchorNode.y + Math.sin(autoAttachmentOrbit.angle) * autoAttachmentOrbit.radius;
          }
          node.vx = 0;
          node.vy = 0;
          continue;
        }
        if (noForces) {
          const calmFactor = layoutSearchFactor <= 0 ? 0.3 : 0.5;
          node.vx *= calmFactor;
          node.vy *= calmFactor;
        } else {
          let accelX = accel.ax;
          let accelY = accel.ay;
          const accelMagRaw = Math.sqrt(accelX * accelX + accelY * accelY);
          if (accelMagRaw > maxAccel) {
            const accelScale = maxAccel / accelMagRaw;
            accelX *= accelScale;
            accelY *= accelScale;
          }
          node.vx += accelX * impulseGain;
          node.vy += accelY * impulseGain;
          node.vx *= velocityRetention;
          node.vy *= velocityRetention;
        }
        node.vx *= settleVelocityBrake;
        node.vy *= settleVelocityBrake;
        const accelMag = Math.sqrt(accel.ax * accel.ax + accel.ay * accel.ay);
        const speedNow = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speedNow > maxSpeed) {
          const ratio = maxSpeed / speedNow;
          node.vx *= ratio;
          node.vy *= ratio;
        }
        if (speedNow < settleVelocityEps && accelMag < settleAccelEps) {
          node.vx = 0;
          node.vy = 0;
        } else {
          movingNodeCount += 1;
        }
        node.x += node.vx;
        node.y += node.vy;
      }
      if (movingNodeCount > 0 && typeof view.markNodeSpatialIndexDirty === "function") {
        view.markNodeSpatialIndexDirty();
      }
      if (settings.layout_autosave && !view.isSearchFilled() && movingNodeCount > 0) {
        view.layoutAutosaveDirty = true;
        view.layoutPaused = false;
      }
      stepLayoutAutosave(view, movingNodeCount > 0);
      if (!view.dragNodeId && elapsedSearchMs >= layoutSearchMs) {
        view.layoutPaused = true;
      }
    }
    function getOrbitRadiusBySpacing(plugin, orbitNodeCount, minRadius) {
      const orbitDistance = plugin.clampNumber(
        plugin.getSettings().orbit_distance,
        1,
        100,
        DEFAULT_DATA2.settings.orbit_distance
      );
      const safeMinRadius = plugin.clampNumber(minRadius, 1, 100, 1);
      const safeOrbitNodeCount = Math.max(1, Number(orbitNodeCount) || 1);
      const radiusBySpacing = safeOrbitNodeCount * orbitDistance / TWO_PI;
      return Math.max(safeMinRadius, radiusBySpacing);
    }
    function getOrbitRadiusForAnchor(plugin, orbitNodeCount) {
      const linkDistance = plugin.clampNumber(
        plugin.getSettings().link_distance,
        1,
        50,
        DEFAULT_DATA2.settings.link_distance
      );
      return getOrbitRadiusBySpacing(plugin, orbitNodeCount, linkDistance);
    }
    function buildAttachmentAutoOrbitMap(view, activeNodeIds = null) {
      const autoOrbitMap = /* @__PURE__ */ new Map();
      return autoOrbitMap;
    }
    function buildAttachmentMainNodeMap(view, nodes, activeNodeIds = null) {
      var _a;
      const mainByAttachmentId = /* @__PURE__ */ new Map();
      for (const node of nodes) {
        if (!((_a = node == null ? void 0 : node.meta) == null ? void 0 : _a.isAttachment)) continue;
        const anchorId = resolveAttachmentMainNodeId(view, node.id, activeNodeIds);
        if (!anchorId) continue;
        mainByAttachmentId.set(node.id, anchorId);
      }
      return mainByAttachmentId;
    }
    function resolveAttachmentMainNodeId(view, attachmentNodeId, activeNodeIds = null) {
      var _a;
      const neighborIds = view.neighborsById.get(attachmentNodeId);
      if (!neighborIds || neighborIds.size === 0) return "";
      let anchorId = "";
      for (const candidateId of neighborIds) {
        if (activeNodeIds && !activeNodeIds.has(candidateId)) continue;
        const candidateNode = view.nodeById.get(candidateId);
        if (!candidateNode) continue;
        if (!((_a = candidateNode.meta) == null ? void 0 : _a.isAttachment)) {
          anchorId = candidateNode.id;
          break;
        }
      }
      if (!anchorId || !view.nodeById.has(anchorId)) return "";
      return anchorId;
    }
    function recomputeOrbitRadii(view) {
      const orbitPins = view.plugin.data.orbit_pins || {};
      const orbitNodeIdsByAnchor = /* @__PURE__ */ new Map();
      for (const [orbitNodeId, orbitMeta] of Object.entries(orbitPins)) {
        const anchorId = String((orbitMeta == null ? void 0 : orbitMeta.anchor_id) || "").trim();
        if (!anchorId) continue;
        if (!view.nodeById.has(orbitNodeId)) continue;
        if (!view.nodeById.has(anchorId)) continue;
        if (!orbitNodeIdsByAnchor.has(anchorId)) orbitNodeIdsByAnchor.set(anchorId, []);
        orbitNodeIdsByAnchor.get(anchorId).push(orbitNodeId);
      }
      let changed = false;
      for (const [anchorId, orbitNodeIds] of orbitNodeIdsByAnchor.entries()) {
        const orbitRadius = getOrbitRadiusForAnchor(view.plugin, orbitNodeIds.length);
        const anchorNode = view.nodeById.get(anchorId);
        if (!anchorNode) continue;
        for (const orbitNodeId of orbitNodeIds) {
          const orbitMeta = orbitPins[orbitNodeId];
          if (!orbitMeta) continue;
          if (Number(orbitMeta.radius) !== orbitRadius) {
            orbitMeta.radius = orbitRadius;
            changed = true;
          }
          const orbitNode = view.nodeById.get(orbitNodeId);
          if (!orbitNode) continue;
          const angle = Number(orbitMeta.angle) || 0;
          orbitNode.x = anchorNode.x + Math.cos(angle) * orbitRadius;
          orbitNode.y = anchorNode.y + Math.sin(angle) * orbitRadius;
          orbitNode.vx = 0;
          orbitNode.vy = 0;
        }
      }
      if (changed) view.plugin.schedulePersist();
      kickLayoutSearch(view);
      view.plugin.renderAllViews();
    }
    module2.exports = {
      kickLayoutSearch,
      updateLayoutCenter,
      stepCameraSmoothing,
      stepSimulation,
      getOrbitRadiusBySpacing,
      getOrbitRadiusForAnchor,
      buildAttachmentAutoOrbitMap,
      recomputeOrbitRadii
    };
  }
});

// src/render.js
var require_render = __commonJS({
  "src/render.js"(exports2, module2) {
    var { DEFAULT_DATA: DEFAULT_DATA2, MAX_ZOOM: MAX_ZOOM2, ZOOM_STEP_FACTOR: ZOOM_STEP_FACTOR2 } = require_constants();
    var { DARK_THEME, getLabelAppearance } = require_theme();
    function getHoverDimAlpha(plugin, focusProgress) {
      const clampedProgress = Math.max(0, Math.min(1, Number(focusProgress) || 0));
      const dimStrength = plugin.clampNumber(
        plugin.getSettings().hover_dim_strength,
        0,
        100,
        DEFAULT_DATA2.settings.hover_dim_strength
      );
      if (dimStrength <= 0 || clampedProgress <= 0) return 1;
      const dimFactor = dimStrength / 100;
      const minAlpha = Math.max(0.02, 1 - dimFactor);
      return Math.max(minAlpha, 1 - clampedProgress * dimFactor);
    }
    function hexToRgba(hexColor, alpha) {
      const text = String(hexColor || "").trim();
      const match = /^#([0-9a-f]{6})$/i.exec(text);
      if (!match) return `rgba(145, 160, 187, ${alpha})`;
      const value = match[1];
      const red = Number.parseInt(value.slice(0, 2), 16);
      const green = Number.parseInt(value.slice(2, 4), 16);
      const blue = Number.parseInt(value.slice(4, 6), 16);
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
    function stepFocusSmoothing(view) {
      const targetFocusNodeId = view.getActiveFocusNodeId();
      const targetProgress = targetFocusNodeId ? 1 : 0;
      const smooth = 0.2;
      view.focusProgress += (targetProgress - view.focusProgress) * smooth;
      if (Math.abs(targetProgress - view.focusProgress) < 0.01) {
        view.focusProgress = targetProgress;
      }
      if (targetFocusNodeId) view.focusNodeId = targetFocusNodeId;
      else if (view.focusProgress <= 1e-3) view.focusNodeId = null;
      const hoverTargetNodeId = view.hoverNodeId || null;
      if (hoverTargetNodeId && hoverTargetNodeId !== view.hoverFocusNodeId) {
        if (view.hoverFocusNodeId && view.hoverFocusProgress > 1e-3) {
          view.hoverFadeNodeId = view.hoverFocusNodeId;
          view.hoverFadeProgress = Math.max(view.hoverFadeProgress, view.hoverFocusProgress);
        }
        view.hoverFocusNodeId = hoverTargetNodeId;
        view.hoverFocusProgress = 0;
        if (view.hoverFadeNodeId && view.hoverFadeNodeId === view.hoverFocusNodeId) {
          view.hoverFadeNodeId = null;
          view.hoverFadeProgress = 0;
        }
      }
      const targetHoverProgress = hoverTargetNodeId ? 1 : 0;
      const hoverSmooth = targetHoverProgress > view.hoverFocusProgress ? 0.24 : 0.3;
      view.hoverFocusProgress += (targetHoverProgress - view.hoverFocusProgress) * hoverSmooth;
      if (Math.abs(targetHoverProgress - view.hoverFocusProgress) < 0.01) {
        view.hoverFocusProgress = targetHoverProgress;
      }
      if (!hoverTargetNodeId && view.hoverFocusProgress <= 1e-3) {
        view.hoverFocusNodeId = null;
      }
      const targetHoverFadeProgress = 0;
      const hoverFadeSmooth = 0.3;
      view.hoverFadeProgress += (targetHoverFadeProgress - view.hoverFadeProgress) * hoverFadeSmooth;
      if (Math.abs(targetHoverFadeProgress - view.hoverFadeProgress) < 0.01) {
        view.hoverFadeProgress = targetHoverFadeProgress;
      }
      if (view.hoverFadeProgress <= 1e-3) {
        view.hoverFadeNodeId = null;
      }
    }
    function renderFrame(view) {
      if (!view.ctx) return;
      const ctx = view.ctx;
      const width = view.viewWidth;
      const height = view.viewHeight;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = view.canvasBackgroundColor || "#111418";
      ctx.fillRect(0, 0, width, height);
      if (view.plugin.getSettings().show_grid) {
        drawGrid(view, ctx);
      }
      drawEdges(view, ctx);
      drawNodes(view, ctx);
      drawSelectionBox(view, ctx);
    }
    function drawFocusedNodeTitle(view, ctx, node) {
      const point = view.worldToScreen(node.x, node.y);
      const labelBase = String(node.label || "");
      if (!labelBase) return;
      const fileType = getNodeFileTypeLabel(node);
      const labelText = fileType ? `${labelBase} (${fileType})` : labelBase;
      const fontSize = 13;
      const padX = 7;
      const padY = 4;
      ctx.save();
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      const textWidth = ctx.measureText(labelText).width;
      const boxWidth = textWidth + padX * 2;
      const boxHeight = fontSize + padY * 2;
      const radius = Math.min(8, boxHeight / 2);
      const boxX = Math.max(6, Math.min(view.viewWidth - boxWidth - 6, point.x - boxWidth / 2));
      const boxY = Math.max(6, point.y - boxHeight - 10);
      const theme = view.canvasTheme || DARK_THEME;
      ctx.globalAlpha = 1;
      ctx.fillStyle = theme.surface;
      ctx.beginPath();
      ctx.moveTo(boxX + radius, boxY);
      ctx.lineTo(boxX + boxWidth - radius, boxY);
      ctx.arcTo(boxX + boxWidth, boxY, boxX + boxWidth, boxY + radius, radius);
      ctx.lineTo(boxX + boxWidth, boxY + boxHeight - radius);
      ctx.arcTo(boxX + boxWidth, boxY + boxHeight, boxX + boxWidth - radius, boxY + boxHeight, radius);
      ctx.lineTo(boxX + radius, boxY + boxHeight);
      ctx.arcTo(boxX, boxY + boxHeight, boxX, boxY + boxHeight - radius, radius);
      ctx.lineTo(boxX, boxY + radius);
      ctx.arcTo(boxX, boxY, boxX + radius, boxY, radius);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = theme.text;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText(labelText, boxX + padX, boxY + padY);
      ctx.restore();
    }
    function getNodeFileTypeLabel(node) {
      var _a, _b;
      const metaType = String(((_a = node == null ? void 0 : node.meta) == null ? void 0 : _a.fileType) || "").trim().toLowerCase();
      if (metaType) return metaType;
      const pathText = String((node == null ? void 0 : node.id) || "").trim();
      const extMatch = /\.([^.\/]+)$/u.exec(pathText);
      if (extMatch && extMatch[1]) return String(extMatch[1]).toLowerCase();
      if ((_b = node == null ? void 0 : node.meta) == null ? void 0 : _b.isAttachment) return "attachment";
      return "md";
    }
    function getNodeRadius(view, node) {
      const nodeScaleRaw = view.plugin.clampNumber(
        view.plugin.getSettings().node_size_scale,
        0.1,
        2,
        DEFAULT_DATA2.settings.node_size_scale
      );
      const attachmentSizeMultiplier = view.plugin.clampNumber(
        view.plugin.getSettings().attachment_size_multiplier,
        0.1,
        1,
        DEFAULT_DATA2.settings.attachment_size_multiplier
      );
      const nodeScale = nodeScaleRaw * 10;
      const raw = (3 + Math.log2(node.degree + 2) * 1.4) * (nodeScale / 4);
      const isAttachmentNode = !!(node && node.meta && node.meta.isAttachment);
      const scaledRaw = isAttachmentNode ? raw * attachmentSizeMultiplier : raw;
      return Math.max(0.2, Math.min(4, scaledRaw / 5));
    }
    function getLabelZoomThreshold(view) {
      const steps = view.plugin.clampNumber(
        view.plugin.getSettings().label_zoom_steps,
        1,
        20,
        DEFAULT_DATA2.settings.label_zoom_steps
      );
      return MAX_ZOOM2 / Math.pow(ZOOM_STEP_FACTOR2, steps - 1);
    }
    function getLabelMinimumSize(view, nodeId) {
      return 10 * getLabelFontSize(view, nodeId) / (DEFAULT_DATA2.settings.label_font_size / 5);
    }
    function getLabelFontSize(view, nodeId) {
      var _a;
      const baseSize = view.plugin.clampNumber(
        (_a = view.plugin.getNodeLabelSize(nodeId)) != null ? _a : view.plugin.getSettings().label_font_size,
        5,
        20,
        DEFAULT_DATA2.settings.label_font_size
      );
      return baseSize / 5;
    }
    function getGroupColorMap(view) {
      const groups = Array.isArray(view.plugin.data.groups) ? view.plugin.data.groups : [];
      if (groups.length === 0) return null;
      const signature = groups.map((group) => {
        if (!group || typeof group !== "object") return "";
        const id = String(group.id || "");
        const enabled = group.enabled !== false ? "1" : "0";
        const query = String(group.query || "").trim();
        const color = String(group.color || "").trim();
        return `${id}|${enabled}|${query}|${color}`;
      }).join("||");
      const graphVersion = Number(view.visibilityGraphVersion || 0);
      const cache = view.groupColorCache && typeof view.groupColorCache === "object" ? view.groupColorCache : null;
      if (cache && cache.graphVersion === graphVersion && cache.groupsSignature === signature && cache.colorByNodeId instanceof Map) {
        return cache.colorByNodeId;
      }
      const parsedGroups = [];
      for (const group of groups) {
        if (!group || group.enabled === false) continue;
        const parsed = view.plugin.parseGroupQuery(group.query);
        if (!parsed) continue;
        parsedGroups.push({
          parsed,
          color: view.plugin.normalizeGroupColor(group.color)
        });
      }
      const colorByNodeId = /* @__PURE__ */ new Map();
      for (const candidateNode of view.nodes) {
        const meta = view.nodeMetaById.get(candidateNode.id) || candidateNode.meta || null;
        if (!meta) continue;
        for (const group of parsedGroups) {
          if (nodeMatchesParsedGroup(meta, group.parsed, candidateNode)) {
            colorByNodeId.set(candidateNode.id, group.color);
            break;
          }
        }
      }
      view.groupColorCache = {
        graphVersion,
        groupsSignature: signature,
        colorByNodeId
      };
      return colorByNodeId;
    }
    function getGroupColorForNode(view, node) {
      const colorByNodeId = getGroupColorMap(view);
      return colorByNodeId instanceof Map ? colorByNodeId.get(node.id) || null : null;
    }
    function nodeMatchesParsedGroup(meta, parsed, node = null) {
      const needle = String(parsed.value || "").trim().toLowerCase();
      if (!needle) return false;
      const includesCI = (value) => String(value || "").toLowerCase().includes(needle);
      if (parsed.type === "name") {
        const label = String((node == null ? void 0 : node.label) || (meta == null ? void 0 : meta.fileName) || "");
        return includesCI(label);
      }
      if (parsed.type === "path") return includesCI(meta.path);
      if (parsed.type === "file") return includesCI(meta.fileName);
      if (parsed.type === "tag")
        return Array.isArray(meta.tags) && meta.tags.some((tag) => includesCI(tag));
      if (parsed.type === "section")
        return Array.isArray(meta.sections) && meta.sections.some((section) => includesCI(section));
      if (parsed.type === "line")
        return Array.isArray(meta.lines) && meta.lines.some((line) => includesCI(line));
      if (parsed.type === "property") {
        const key = String(parsed.propertyKey || "").trim().toLowerCase();
        if (!key) return false;
        const values = meta.properties instanceof Map ? meta.properties.get(key) : null;
        return Array.isArray(values) && values.some((value) => includesCI(value));
      }
      return false;
    }
    function drawGrid(view, ctx) {
      const step = view.plugin.clampGridStep(view.plugin.getSettings().grid_step);
      const zoom = view.camera.zoom;
      const scaledStep = step * zoom;
      if (scaledStep < 8) return;
      const leftWorld = view.screenToWorld(0, 0).x;
      const rightWorld = view.screenToWorld(view.viewWidth, 0).x;
      const topWorld = view.screenToWorld(0, 0).y;
      const bottomWorld = view.screenToWorld(0, view.viewHeight).y;
      const startX = Math.floor(leftWorld / step) * step;
      const endX = Math.ceil(rightWorld / step) * step;
      const startY = Math.floor(topWorld / step) * step;
      const endY = Math.ceil(bottomWorld / step) * step;
      const theme = view.canvasTheme || DARK_THEME;
      ctx.save();
      ctx.globalAlpha = theme.gridOpacity;
      ctx.strokeStyle = theme.grid;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = startX; x <= endX; x += step) {
        const sx = view.worldToScreen(x, 0).x;
        const crispX = Math.round(sx) + 0.5;
        ctx.moveTo(crispX, 0);
        ctx.lineTo(crispX, view.viewHeight);
      }
      for (let y = startY; y <= endY; y += step) {
        const sy = view.worldToScreen(0, y).y;
        const crispY = Math.round(sy) + 0.5;
        ctx.moveTo(0, crispY);
        ctx.lineTo(view.viewWidth, crispY);
      }
      ctx.stroke();
      ctx.restore();
    }
    function drawEdges(view, ctx) {
      var _a;
      const zoom = Math.max(view.camera.zoom, 1e-4);
      const halfWidthWorld = view.viewWidth / (2 * zoom);
      const halfHeightWorld = view.viewHeight / (2 * zoom);
      const edgePadWorld = 80 / zoom;
      const minWorldX = view.camera.x - halfWidthWorld - edgePadWorld;
      const maxWorldX = view.camera.x + halfWidthWorld + edgePadWorld;
      const minWorldY = view.camera.y - halfHeightWorld - edgePadWorld;
      const maxWorldY = view.camera.y + halfHeightWorld + edgePadWorld;
      const screenCenterX = view.viewWidth / 2;
      const screenCenterY = view.viewHeight / 2;
      const edgeScale = view.plugin.clampNumber(
        view.plugin.getSettings().edge_width_scale,
        0.01,
        1,
        DEFAULT_DATA2.settings.edge_width_scale
      );
      const paintedEdgeScale = view.plugin.clampNumber(
        view.plugin.getSettings().painted_edge_width,
        0.01,
        1,
        DEFAULT_DATA2.settings.painted_edge_width
      );
      const visibleNodeIds = view.getFilterVisibleNodeIds();
      const hasFilter = visibleNodeIds instanceof Set;
      const filterNodeId = hasFilter ? view.getFilterNodeId() : null;
      const isNameFilterMode = hasFilter && view.getEffectiveSearchSource() === "name" && !!filterNodeId;
      const focusNodeId = view.focusNodeId;
      const focusProgress = view.focusProgress;
      const hasFocus = !!focusNodeId && focusProgress > 1e-3;
      const hoverFocusNodeId = view.hoverFocusNodeId;
      const hoverFocusProgress = view.hoverFocusProgress;
      const hasHoverFocus = !!hoverFocusNodeId && hoverFocusProgress > 1e-3;
      const hoverFadeNodeId = view.hoverFadeNodeId;
      const hoverFadeProgress = view.hoverFadeProgress;
      const hasHoverFade = !!hoverFadeNodeId && hoverFadeProgress > 1e-3;
      const hasAnyFocus = hasFocus || hasHoverFocus || hasHoverFade;
      const combinedFocusProgress = Math.max(focusProgress, hoverFocusProgress, hoverFadeProgress);
      const searchHighlightNodeIds = view.getSearchHighlightNodeIds();
      const hasSearchHighlight = view.searchMode === "find" && searchHighlightNodeIds instanceof Set && searchHighlightNodeIds.size > 0;
      const searchDimAlpha = hasSearchHighlight ? getHoverDimAlpha(view.plugin, 1) : 1;
      const focusDimAlpha = getHoverDimAlpha(view.plugin, combinedFocusProgress);
      const normalEdgeAlpha = hasSearchHighlight ? searchDimAlpha : hasAnyFocus ? focusDimAlpha : 1;
      const paintedEdgeColors = ((_a = view.plugin.data) == null ? void 0 : _a.painted_edge_colors) || {};
      let hasNormalEdgeBatch = false;
      const beginNormalEdgeBatch = () => {
        if (hasNormalEdgeBatch) return;
        ctx.globalAlpha = normalEdgeAlpha;
        ctx.strokeStyle = "rgba(145, 160, 187, 0.35)";
        ctx.lineWidth = edgeScale;
        ctx.beginPath();
        hasNormalEdgeBatch = true;
      };
      const flushNormalEdgeBatch = () => {
        if (!hasNormalEdgeBatch) return;
        ctx.stroke();
        hasNormalEdgeBatch = false;
      };
      for (const edge of view.edges) {
        if (hasFilter) {
          if (!visibleNodeIds.has(edge.source) || !visibleNodeIds.has(edge.target)) continue;
          if (isNameFilterMode) {
            const isFilterEdge = edge.source === filterNodeId || edge.target === filterNodeId;
            if (!isFilterEdge) continue;
          }
        }
        const sourceNode = edge.sourceNode || view.nodeById.get(edge.source);
        const targetNode = edge.targetNode || view.nodeById.get(edge.target);
        if (!sourceNode || !targetNode) continue;
        if (sourceNode.x < minWorldX && targetNode.x < minWorldX || sourceNode.x > maxWorldX && targetNode.x > maxWorldX || sourceNode.y < minWorldY && targetNode.y < minWorldY || sourceNode.y > maxWorldY && targetNode.y > maxWorldY) {
          continue;
        }
        const sourcePointX = (sourceNode.x - view.camera.x) * zoom + screenCenterX;
        const sourcePointY = (sourceNode.y - view.camera.y) * zoom + screenCenterY;
        const targetPointX = (targetNode.x - view.camera.x) * zoom + screenCenterX;
        const targetPointY = (targetNode.y - view.camera.y) * zoom + screenCenterY;
        const sourcePaintColor = paintedEdgeColors[sourceNode.id] || null;
        const targetPaintColor = paintedEdgeColors[targetNode.id] || null;
        const paintedColor = sourcePaintColor || targetPaintColor;
        const isHoverFocusEdge = !!hoverFocusNodeId && (edge.source === hoverFocusNodeId || edge.target === hoverFocusNodeId);
        const isHoverFadeEdge = !!hoverFadeNodeId && (edge.source === hoverFadeNodeId || edge.target === hoverFadeNodeId);
        const hoverFocusEdgeProgress = isHoverFocusEdge ? hoverFocusProgress : 0;
        const hoverFadeEdgeProgress = isHoverFadeEdge ? hoverFadeProgress : 0;
        const searchEdgeProgress = hasSearchHighlight && view.plugin.getSettings().show_search_connections && (searchHighlightNodeIds.has(edge.source) || searchHighlightNodeIds.has(edge.target)) ? 1 : 0;
        const focusEdgeProgress = Math.max(
          searchEdgeProgress,
          hoverFocusEdgeProgress,
          hoverFadeEdgeProgress
        );
        if (!paintedColor && focusEdgeProgress <= 1e-3) {
          beginNormalEdgeBatch();
          ctx.moveTo(sourcePointX, sourcePointY);
          ctx.lineTo(targetPointX, targetPointY);
          continue;
        }
        flushNormalEdgeBatch();
        const edgeAlpha = hasSearchHighlight ? searchDimAlpha + (1 - searchDimAlpha) * focusEdgeProgress : hasAnyFocus ? focusDimAlpha + (1 - focusDimAlpha) * focusEdgeProgress : 1;
        ctx.globalAlpha = edgeAlpha;
        if (paintedColor) {
          const alpha = 0.65 + (0.95 - 0.65) * focusEdgeProgress;
          ctx.strokeStyle = hexToRgba(paintedColor, alpha);
          ctx.lineWidth = paintedEdgeScale + (2 - paintedEdgeScale) * focusEdgeProgress;
        } else {
          const red = Math.round(145 + (166 - 145) * focusEdgeProgress);
          const green = Math.round(160 + (204 - 160) * focusEdgeProgress);
          const blue = Math.round(187 + (255 - 187) * focusEdgeProgress);
          const alpha = 0.35 + (0.95 - 0.35) * focusEdgeProgress;
          ctx.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
          ctx.lineWidth = edgeScale + (2 - edgeScale) * focusEdgeProgress;
        }
        ctx.beginPath();
        ctx.moveTo(sourcePointX, sourcePointY);
        ctx.lineTo(targetPointX, targetPointY);
        ctx.stroke();
      }
      flushNormalEdgeBatch();
      ctx.globalAlpha = 1;
    }
    function drawNodes(view, ctx) {
      const zoom = Math.max(view.camera.zoom, 1e-4);
      const halfWidthWorld = view.viewWidth / (2 * zoom);
      const halfHeightWorld = view.viewHeight / (2 * zoom);
      const nodePadWorld = 80 / zoom;
      const minWorldX = view.camera.x - halfWidthWorld - nodePadWorld;
      const maxWorldX = view.camera.x + halfWidthWorld + nodePadWorld;
      const minWorldY = view.camera.y - halfHeightWorld - nodePadWorld;
      const maxWorldY = view.camera.y + halfHeightWorld + nodePadWorld;
      const screenCenterX = view.viewWidth / 2;
      const screenCenterY = view.viewHeight / 2;
      const labelMinZoom = getLabelZoomThreshold(view);
      const theme = view.canvasTheme || DARK_THEME;
      const nowMs = Date.now();
      const visibleNodeIds = view.getFilterVisibleNodeIds();
      const hasFilter = visibleNodeIds instanceof Set;
      const focusNodeId = view.focusNodeId;
      const focusProgress = view.focusProgress;
      const hasFocus = !!focusNodeId && focusProgress > 1e-3;
      const hoverFocusNodeId = view.hoverFocusNodeId;
      const hoverFocusProgress = view.hoverFocusProgress;
      const hasHoverFocus = !!hoverFocusNodeId && hoverFocusProgress > 1e-3;
      const hoverFadeNodeId = view.hoverFadeNodeId;
      const hoverFadeProgress = view.hoverFadeProgress;
      const hasHoverFade = !!hoverFadeNodeId && hoverFadeProgress > 1e-3;
      const hoverFocusNeighbors = hasHoverFocus ? view.neighborsById.get(hoverFocusNodeId) || /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set();
      const hoverFadeNeighbors = hasHoverFade ? view.neighborsById.get(hoverFadeNodeId) || /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set();
      const hasAnyFocus = hasFocus || hasHoverFocus || hasHoverFade;
      const combinedFocusProgress = Math.max(focusProgress, hoverFocusProgress, hoverFadeProgress);
      const searchHighlightNodeIds = view.getSearchHighlightNodeIds();
      const hasSearchHighlight = view.searchMode === "find" && searchHighlightNodeIds instanceof Set && searchHighlightNodeIds.size > 0;
      const searchDimAlpha = hasSearchHighlight ? getHoverDimAlpha(view.plugin, 1) : 1;
      const focusDimAlpha = getHoverDimAlpha(view.plugin, combinedFocusProgress);
      const groupColorByNodeId = getGroupColorMap(view);
      const searchNeighbors = /* @__PURE__ */ new Set();
      if (hasSearchHighlight && view.plugin.getSettings().show_search_connections) {
        for (const id of searchHighlightNodeIds) {
          if (hasFilter && !visibleNodeIds.has(id)) continue;
          for (const neighbor of view.neighborsById.get(id) || []) searchNeighbors.add(neighbor);
        }
      }
      const selectedNodeIds = view.selectedNodeIds instanceof Set ? view.selectedNodeIds : null;
      for (const node of view.nodes) {
        if (hasFilter && (!visibleNodeIds || !visibleNodeIds.has(node.id))) continue;
        if (node.x < minWorldX || node.x > maxWorldX || node.y < minWorldY || node.y > maxWorldY) {
          continue;
        }
        const pointX = (node.x - view.camera.x) * zoom + screenCenterX;
        const pointY = (node.y - view.camera.y) * zoom + screenCenterY;
        const radius = Math.max(0.6, getNodeRadius(view, node) * view.camera.zoom);
        const isFocusNode = hasFocus && node.id === focusNodeId;
        const isHoverFocusNode = hasHoverFocus && node.id === hoverFocusNodeId;
        const isHoverNodeRaw = view.hoverNodeId === node.id;
        const isHoverFadeNode = hasHoverFade && node.id === hoverFadeNodeId;
        const isSearchHighlightNode = hasSearchHighlight && searchHighlightNodeIds.has(node.id);
        const isSelectedNode = isSearchHighlightNode || (selectedNodeIds ? selectedNodeIds.has(node.id) : false);
        const focusNodeProgress = isFocusNode ? focusProgress : 0;
        const hoverFocusNodeProgress = isHoverFocusNode ? hoverFocusProgress : 0;
        const hoverFadeNodeProgress = isHoverFadeNode ? hoverFadeProgress : 0;
        const hoverFocusNeighborProgress = hasHoverFocus && hoverFocusNeighbors.has(node.id) ? hoverFocusProgress : 0;
        const hoverFadeNeighborProgress = hasHoverFade && hoverFadeNeighbors.has(node.id) ? hoverFadeProgress : 0;
        const relationProgress = Math.max(
          focusNodeProgress,
          hoverFocusNodeProgress,
          hoverFadeNodeProgress,
          hoverFocusNeighborProgress,
          hoverFadeNeighborProgress
        );
        const hoverVisualProgressBase = isHoverFocusNode ? hoverFocusProgress : isFocusNode ? focusProgress : isHoverNodeRaw ? 1 : 0;
        const hoverVisualProgress = Math.max(
          hoverVisualProgressBase,
          isFocusNode ? focusProgress : 0,
          isHoverFadeNode ? hoverFadeProgress : 0
        );
        const isHover = hoverVisualProgress > 1e-3;
        const isClickFlash = view.clickFlashNodeId === node.id && nowMs < view.clickFlashUntilMs;
        const groupColor = groupColorByNodeId instanceof Map ? groupColorByNodeId.get(node.id) : null;
        const nodeAlpha = isClickFlash ? 1 : hasSearchHighlight ? isSearchHighlightNode ? 1 : searchDimAlpha + (1 - searchDimAlpha) * Math.max(
          searchNeighbors.has(node.id) ? 1 : 0,
          hoverFocusNodeProgress,
          hoverFadeNodeProgress,
          hoverFocusNeighborProgress,
          hoverFadeNeighborProgress
        ) : hasAnyFocus ? focusDimAlpha + (1 - focusDimAlpha) * relationProgress : 1;
        const isAttachmentNode = !!(node && node.meta && node.meta.isAttachment);
        let fillColor = isAttachmentNode ? "#f2e7a0" : "#7aa2f7";
        if (groupColor && !isAttachmentNode) fillColor = groupColor;
        if (isClickFlash) fillColor = "#ffffff";
        ctx.globalAlpha = nodeAlpha;
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(pointX, pointY, radius, 0, Math.PI * 2);
        ctx.fill();
        if (isHover || isSelectedNode) {
          const hoverStrokeAlpha = Math.max(0.12, 0.95 * hoverVisualProgress);
          const selectedStrokeAlpha = isSelectedNode ? 0.95 : 0;
          const hoverLineWidth = 1 + hoverVisualProgress;
          const selectedLineWidth = isSelectedNode ? 1.4 : 0;
          ctx.globalAlpha = Math.max(hoverStrokeAlpha, selectedStrokeAlpha);
          ctx.strokeStyle = theme.selection;
          ctx.lineWidth = Math.max(hoverLineWidth, selectedLineWidth);
          ctx.beginPath();
          ctx.arc(pointX, pointY, radius + 2, 0, Math.PI * 2);
          ctx.stroke();
        }
        const label = getLabelAppearance(
          zoom,
          labelMinZoom,
          getLabelFontSize(view, node.id),
          nodeAlpha,
          isSelectedNode || isHover || isFocusNode,
          getLabelMinimumSize(view, node.id)
        );
        if (!isAttachmentNode && label.alpha > 0) {
          ctx.globalAlpha = label.alpha;
          ctx.fillStyle = theme.text;
          ctx.font = `${label.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillText(node.label, pointX, pointY + radius + 8);
        }
      }
      ctx.globalAlpha = 1;
      const hoverTitleNode = view.hoverNodeId ? view.nodeById.get(view.hoverNodeId) || null : null;
      if (hoverTitleNode) drawFocusedNodeTitle(view, ctx, hoverTitleNode);
      if (view.clickFlashNodeId && nowMs >= view.clickFlashUntilMs) {
        view.clickFlashNodeId = null;
        view.clickFlashUntilMs = 0;
      }
    }
    function drawSelectionBox(view, ctx) {
      const boxSelect = view.boxSelectDrag;
      if (!boxSelect) return;
      const left = Math.min(boxSelect.startX, boxSelect.currentX);
      const top = Math.min(boxSelect.startY, boxSelect.currentY);
      const width = Math.abs(boxSelect.currentX - boxSelect.startX);
      const height = Math.abs(boxSelect.currentY - boxSelect.startY);
      if (width < 1 && height < 1) return;
      ctx.save();
      const theme = view.canvasTheme || DARK_THEME;
      ctx.fillStyle = theme.selection;
      ctx.strokeStyle = theme.selection;
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 3]);
      ctx.globalAlpha = 0.12;
      ctx.fillRect(left, top, width, height);
      ctx.globalAlpha = 0.9;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    }
    module2.exports = {
      stepFocusSmoothing,
      renderFrame,
      getHoverDimAlpha,
      hexToRgba,
      drawFocusedNodeTitle,
      getNodeRadius,
      getLabelZoomThreshold,
      getLabelFontSize,
      getLabelMinimumSize,
      getGroupColorForNode,
      nodeMatchesParsedGroup,
      drawGrid,
      drawEdges,
      drawNodes,
      drawSelectionBox
    };
  }
});

// src/view.js
var require_view = __commonJS({
  "src/view.js"(exports2, module2) {
    var { ItemView, Notice: Notice2, Menu, MarkdownRenderer, Modal } = require("obsidian");
    var { DARK_THEME, readGraphTheme, getLabelAppearance } = require_theme();
    var { buildNodeContextMenu } = require_node_context_menu();
    var {
      DEFAULT_DATA: DEFAULT_DATA2,
      GRAPHFRONTIER_VIEW_TYPE: GRAPHFRONTIER_VIEW_TYPE2,
      NODE_MULTIPLIER_MIN: NODE_MULTIPLIER_MIN2,
      NODE_MULTIPLIER_MAX: NODE_MULTIPLIER_MAX2,
      ZOOM_STEP_FACTOR: ZOOM_STEP_FACTOR2,
      MIN_ZOOM: MIN_ZOOM2,
      MAX_ZOOM: MAX_ZOOM2
    } = require_constants();
    var {
      kickLayoutSearch: kickLayoutSearchPhysics,
      updateLayoutCenter: updateLayoutCenterPhysics,
      getOrbitRadiusBySpacing,
      getOrbitRadiusForAnchor,
      buildAttachmentAutoOrbitMap: buildAttachmentAutoOrbitMapPhysics,
      recomputeOrbitRadii: recomputeOrbitRadiiPhysics,
      stepCameraSmoothing: stepCameraSmoothingPhysics,
      stepSimulation: stepSimulationPhysics
    } = require_physics();
    var {
      stepFocusSmoothing: stepFocusSmoothingRender,
      renderFrame: renderFrameRender,
      getHoverDimAlpha,
      hexToRgba,
      drawFocusedNodeTitle: drawFocusedNodeTitleRender,
      getNodeRadius: getNodeRadiusRender,
      getLabelZoomThreshold: getLabelZoomThresholdRender,
      getLabelFontSize: getLabelFontSizeRender,
      getLabelMinimumSize: getLabelMinimumSizeRender,
      getGroupColorForNode: getGroupColorForNodeRender,
      nodeMatchesParsedGroup: nodeMatchesParsedGroupRender,
      drawGrid: drawGridRender,
      drawEdges: drawEdgesRender,
      drawNodes: drawNodesRender
    } = require_render();
    var GraphFrontierView2 = class extends ItemView {
      constructor(leaf, plugin) {
        var _a, _b;
        super(leaf);
        this.plugin = plugin;
        this.canvasEl = null;
        this.ctx = null;
        this.wrapEl = null;
        this.sidePanelEl = null;
        this.viewWidth = 1;
        this.viewHeight = 1;
        this.devicePixelRatio = 1;
        this.nodes = [];
        this.nodeById = /* @__PURE__ */ new Map();
        this.nodeMetaById = /* @__PURE__ */ new Map();
        this.edges = [];
        this.nodeSpatialIndex = null;
        this.nodeSpatialIndexVersion = 0;
        this.nodeSpatialIndexBuildVersion = -1;
        this.nodeSpatialIndexCellSize = 64;
        this.groupColorCache = {
          graphVersion: -1,
          groupsSignature: "",
          colorByNodeId: /* @__PURE__ */ new Map()
        };
        this.lastCursorScreen = null;
        this.hoverNodeId = null;
        this.dragNodeId = null;
        this.dragNodeOffset = { x: 0, y: 0 };
        this.panDrag = null;
        this.touchGesture = null;
        this.ignoreMouseUntilMs = 0;
        this.touchLongPressTimer = null;
        this.camera = {
          x: plugin.data.view_state.pan_x || 0,
          y: plugin.data.view_state.pan_y || 0,
          zoom: plugin.data.view_state.zoom || 1
        };
        this.cameraTarget = {
          x: this.camera.x,
          y: this.camera.y,
          zoom: this.camera.zoom
        };
        this.layoutCenter = { x: 0, y: 0 };
        this.dragStartScreen = null;
        this.dragMovedDistance = 0;
        this.panDragMovedDistance = 0;
        this.sidePanelOpen = true;
        this.sideControls = /* @__PURE__ */ new Map();
        const savedSidePanelSections = ((_b = (_a = plugin.data) == null ? void 0 : _a.view_state) == null ? void 0 : _b.side_panel_sections) && typeof plugin.data.view_state.side_panel_sections === "object" ? plugin.data.view_state.side_panel_sections : {};
        this.sidePanelSectionState = Object.assign({}, savedSidePanelSections);
        this.groupEditorRows = [];
        this.draggingGroupRow = null;
        this.blacklistEditorRows = [];
        this.whitelistEditorRows = [];
        this.draggingQueryRuleRow = null;
        this.searchMode = this.plugin.data.settings.search_mode === "filter" ? "filter" : "find";
        this.searchInputValue = "";
        this.searchSelectedNodeId = null;
        this.searchMatchedNodeIds = /* @__PURE__ */ new Set();
        this.searchModeToggleEl = null;
        this.searchModeFindLabelEl = null;
        this.searchModeFilterLabelEl = null;
        this.searchInputEl = null;
        this.searchClearButtonEl = null;
        this.searchSuggestSuppressUntilMs = 0;
        this.layoutFileSearchInputValue = this.plugin.getActiveLayoutFileName();
        this.layoutFileSelectedName = this.layoutFileSearchInputValue;
        this.layoutFileSearchInputEl = null;
        this.layoutFileSearchClearButtonEl = null;
        this.layoutFileSuggestSuppressUntilMs = 0;
        this.layoutFileSuggestRequestToken = 0;
        this.contentSearchIndex = /* @__PURE__ */ new Map();
        this.contentSearchBuildToken = 0;
        this.contentSearchIndexGraphVersion = -1;
        this.contentSearchBuildGraphVersion = -1;
        this.focusNodeId = null;
        this.focusProgress = 0;
        this.hoverFocusNodeId = null;
        this.hoverFocusProgress = 0;
        this.hoverFadeNodeId = null;
        this.hoverFadeProgress = 0;
        this.neighborsById = /* @__PURE__ */ new Map();
        this.clickFlashNodeId = null;
        this.clickFlashUntilMs = 0;
        this.selectedNodeIds = /* @__PURE__ */ new Set();
        this.boxSelectDrag = null;
        this.boxSelectArmed = false;
        this.dragSelectionOffsets = null;
        this.layoutKickAtMs = Date.now();
        this.layoutStillFrames = 0;
        this.layoutAutosaveDirty = false;
        this.layoutEditVersion = 0;
        this.layoutPaused = false;
        this.hasSeenMetadataResolvedRefresh = !!this.plugin.metadataResolvedOnce;
        this.quickPreviewEl = null;
        this.quickPreviewTitleEl = null;
        this.quickPreviewBodyEl = null;
        this.quickPreviewNodeId = null;
        this.quickPreviewLoadToken = 0;
        this.inputSuggestMenu = null;
        this.inputSuggestInputEl = null;
        this.visibilityGraphVersion = 0;
        this.visibilitySearchVersion = 0;
        this.filterVisibilityCache = {
          parsedRulesSignature: "",
          parsedBlacklistRules: [],
          parsedWhitelistRules: [],
          queryRuleVisibleGraphVersion: -1,
          queryRuleVisibleRulesSignature: "",
          queryRuleVisibleNodeIds: null,
          searchVisibleVersion: -1,
          searchVisibleNodeIds: null,
          finalVisibleKey: "",
          finalVisibleNodeIds: null
        };
        this.isOpen = false;
        this.resizeObserver = null;
        this.frameHandle = null;
        this.canvasTheme = { ...DARK_THEME };
        this.canvasBackgroundColor = this.canvasTheme.background;
      }
      getViewType() {
        return GRAPHFRONTIER_VIEW_TYPE2;
      }
      getDisplayText() {
        return "GraphFrontier";
      }
      getIcon() {
        return "orbit";
      }
      // View lifecycle: create canvas/UI on open and release resources on close.
      async onOpen() {
        const loaded = await this.plugin.setActiveLayoutFile(this.plugin.getActiveLayoutFileName());
        if (!loaded) new Notice2("Cannot read active layout. File left unchanged.");
        this.searchMode = this.plugin.data.settings.search_mode === "filter" ? "filter" : "find";
        this.sidePanelSectionState = this.plugin.getSidePanelSectionsState();
        this.contentEl.empty();
        this.contentEl.addClass("graphfrontier-host");
        this.wrapEl = this.contentEl.createDiv({ cls: "graphfrontier-wrap" });
        this.canvasEl = this.wrapEl.createEl("canvas", { cls: "graphfrontier-canvas" });
        this.sidePanelEl = this.wrapEl.createDiv({ cls: "graphfrontier-sidepanel" });
        this.buildQuickPreviewPanel();
        this.ctx = this.canvasEl.getContext("2d");
        this.updateCanvasBackgroundColor();
        this.buildSidePanel();
        this.bindEvents();
        this.installResizeObserver();
        this.resizeCanvas();
        const hasSavedLayoutPositions = Object.keys(this.plugin.data.saved_positions || {}).length > 0;
        this.refreshFromVault({
          keepCamera: false,
          forceSavedPositions: loaded,
          skipLayoutKick: !loaded || hasSavedLayoutPositions
        });
        this.isOpen = true;
        this.runFrame();
      }
      async onClose() {
        this.isOpen = false;
        if (this.frameHandle) {
          this.contentEl.win.cancelAnimationFrame(this.frameHandle);
          this.frameHandle = null;
        }
        if (this.resizeObserver) {
          this.resizeObserver.disconnect();
          this.resizeObserver = null;
        }
        this.plugin.data.view_state.pan_x = this.cameraTarget.x;
        this.plugin.data.view_state.pan_y = this.cameraTarget.y;
        this.plugin.data.view_state.zoom = this.cameraTarget.zoom;
        const autosaveEnabled = !!this.plugin.data.settings.layout_autosave;
        if (autosaveEnabled && this.layoutAutosaveDirty && !this.isSearchFilled()) {
          if (!await this.saveCurrentLayout({ silent: true })) {
            new Notice2("Failed to save layout on close. Changes are still unsaved.");
          }
        } else if (!autosaveEnabled) {
          await this.loadSavedLayout({ silent: true });
        }
        this.contentEl.removeClass("graphfrontier-host");
        this.clearTouchLongPressTimer();
        this.closeInputSuggestMenu();
        this.closeQuickPreview();
        this.plugin.schedulePersist();
      }
      bindEvents() {
        this.registerEvent(
          this.app.workspace.on("css-change", () => {
            this.updateCanvasBackgroundColor();
            this.render();
          })
        );
        this.registerDomEvent(this.canvasEl, "mousemove", (event) => this.onMouseMove(event));
        this.registerDomEvent(this.canvasEl, "mousedown", (event) => this.onMouseDown(event));
        this.registerDomEvent(this.canvasEl, "mouseup", (event) => this.onMouseUp(event));
        this.registerDomEvent(this.canvasEl, "mouseleave", () => this.onMouseUp());
        this.registerDomEvent(this.canvasEl, "touchstart", (event) => this.onTouchStart(event), {
          passive: false
        });
        this.registerDomEvent(this.canvasEl, "touchmove", (event) => this.onTouchMove(event), {
          passive: false
        });
        this.registerDomEvent(this.canvasEl, "touchend", (event) => this.onTouchEnd(event), {
          passive: false
        });
        this.registerDomEvent(this.canvasEl, "touchcancel", (event) => this.onTouchEnd(event), {
          passive: false
        });
        this.registerDomEvent(this.canvasEl, "wheel", (event) => this.onWheel(event), {
          passive: false
        });
        this.registerDomEvent(this.canvasEl, "contextmenu", (event) => this.onContextMenu(event));
        this.registerDomEvent(this.contentEl.ownerDocument, "mousedown", (event) => {
          if (!this.quickPreviewEl || !this.quickPreviewEl.classList.contains("is-open")) return;
          const eventTarget = event.target;
          if (eventTarget && this.quickPreviewEl.contains(eventTarget)) return;
          this.closeQuickPreview();
        });
        const visualViewport = this.contentEl.win ? this.contentEl.win.visualViewport : null;
        if (visualViewport) {
          this.registerDomEvent(visualViewport, "resize", () => this.handleViewportResize());
          this.registerDomEvent(visualViewport, "scroll", () => this.handleViewportResize());
        }
      }
      buildQuickPreviewPanel() {
        if (!this.wrapEl) return;
        this.quickPreviewEl = this.wrapEl.createDiv({ cls: "graphfrontier-preview" });
        const header = this.quickPreviewEl.createDiv({ cls: "graphfrontier-preview-header" });
        this.quickPreviewTitleEl = header.createDiv({
          cls: "graphfrontier-preview-title",
          text: "Preview"
        });
        const closeButton = header.createEl("button", {
          cls: "graphfrontier-preview-close",
          text: "x"
        });
        this.quickPreviewBodyEl = this.quickPreviewEl.createDiv({ cls: "graphfrontier-preview-body" });
        this.registerDomEvent(closeButton, "click", () => this.closeQuickPreview());
      }
      // Right side panel assembly: toggles, sliders, and layout action buttons.
      buildSidePanel() {
        if (!this.sidePanelEl) return;
        this.sidePanelEl.empty();
        this.sideControls.clear();
        this.searchModeToggleEl = null;
        this.searchModeFindLabelEl = null;
        this.searchModeFilterLabelEl = null;
        this.searchInputEl = null;
        this.searchClearButtonEl = null;
        this.layoutFileSearchInputEl = null;
        this.layoutFileSearchClearButtonEl = null;
        this.sidePanelEl.toggleClass("is-open", this.sidePanelOpen);
        const header = this.sidePanelEl.createDiv({ cls: "graphfrontier-sidepanel-header" });
        header.createSpan({ text: "Graph settings", cls: "graphfrontier-sidepanel-title" });
        const toggleBtn = header.createEl("button", {
          text: this.sidePanelOpen ? "Hide" : "Show",
          cls: "graphfrontier-sidepanel-toggle"
        });
        this.registerDomEvent(toggleBtn, "click", () => {
          this.sidePanelOpen = !this.sidePanelOpen;
          this.buildSidePanel();
        });
        const body = this.sidePanelEl.createDiv({ cls: "graphfrontier-sidepanel-body" });
        if (!this.sidePanelOpen) return;
        const searchSection = this.createSidePanelSection(body, {
          id: "search",
          title: "Search",
          openByDefault: true
        });
        this.buildFindSection(searchSection);
        const selectionSection = this.createSidePanelSection(body, {
          id: "selection",
          title: "Selection",
          openByDefault: true
        });
        this.addSideModifierSelect(selectionSection, "Box select", "selection_box_modifier", {
          hint: "Modifier key for box selection drag on empty space"
        });
        this.addSideModifierSelect(
          selectionSection,
          "Add/remove selected",
          "selection_toggle_modifier",
          {
            hint: "Modifier key for toggling single-node selection on click"
          }
        );
        const displaySection = this.createSidePanelSection(body, {
          id: "display",
          title: "Display",
          openByDefault: true
        });
        this.addSideToggle(displaySection, "Show grid", "show_grid", "render", {
          hint: "Show or hide background grid in graph area"
        });
        this.addSideToggle(displaySection, "Existing files only", "existing_files_only", "data", {
          hint: "Show only files that currently exist in vault"
        });
        this.addSideToggle(displaySection, "Show orphans", "hide_orphans", "data", {
          inverted: true,
          hint: "Show nodes without links (orphans)"
        });
        this.addSideToggle(displaySection, "Show attachments", "hide_attachments", "data", {
          inverted: true,
          rebuildPanelOnChange: true,
          hint: "Show non-markdown files as attachment nodes"
        });
        if (!this.plugin.data.settings.hide_attachments) {
          this.addSideToggle(
            displaySection,
            "Attachments no-physics",
            "attachments_on_orbits",
            "render",
            {
              hint: "Attachments interact only with their main node and other attachments",
              onChange: () => {
                this.kickLayoutSearch();
              }
            }
          );
          this.addSideSlider(
            displaySection,
            "Attachment size",
            "attachment_size_multiplier",
            0.1,
            1,
            0.1,
            "render",
            {
              hint: "Scale multiplier for attachment node size"
            }
          );
          this.addSideSlider(
            displaySection,
            "Attachment link distance",
            "attachment_link_distance_multiplier",
            1,
            100,
            1,
            "render",
            {
              hint: "Target distance for links connected to attachments"
            }
          );
        }
        this.addSideSlider(displaySection, "Grid step", "grid_step", 5, 50, 5, "render", {
          hint: "Grid cell size in world coordinates"
        });
        this.addSideSlider(displaySection, "Node size", "node_size_scale", 0.1, 2, 0.01, "render", {
          hint: "Visual node radius scale"
        });
        this.addSideSlider(displaySection, "Edge width", "edge_width_scale", 0.01, 1, 0.01, "render", {
          hint: "Visual thickness of regular edges"
        });
        this.addSideSlider(
          displaySection,
          "Painted edge width",
          "painted_edge_width",
          0.01,
          1,
          0.01,
          "render",
          {
            hint: "Visual thickness for painted edges only"
          }
        );
        this.addSideSlider(displaySection, "Text zoom", "label_zoom_steps", 1, 20, 1, "render", {
          hint: "How far labels stay visible when zooming out"
        });
        this.addSideSlider(displaySection, "Text size", "label_font_size", 5, 20, 1, "render", {
          hint: "Base font size for node labels"
        });
        this.addSideSlider(displaySection, "Hover dimming", "hover_dim_strength", 0, 100, 1, "render", {
          hint: "How strongly non-focused nodes/edges are dimmed"
        });
        const physicsSection = this.createSidePanelSection(body, {
          id: "physics",
          title: "Physics",
          openByDefault: true
        });
        this.addSideSlider(physicsSection, "Link strength", "base_link_strength", 1, 100, 1, "render", {
          hint: "Spring force for graph links"
        });
        this.addSideSlider(physicsSection, "Link distance", "link_distance", 1, 50, 1, "render", {
          hint: "Target distance for regular links"
        });
        this.addSideSlider(
          physicsSection,
          "Strong pull x",
          "strong_pull_multiplier",
          NODE_MULTIPLIER_MIN2,
          NODE_MULTIPLIER_MAX2,
          1,
          "render",
          {
            hint: "Multiplier used by Strong pull command"
          }
        );
        this.addSideSlider(physicsSection, "Orbit distance", "orbit_distance", 1, 100, 1, "render", {
          hint: "Desired spacing between nodes pinned to same orbit"
        });
        this.addSideSlider(physicsSection, "Repel strength", "repel_strength", 0, 100, 1, "render", {
          hint: "Repulsion force between nodes"
        });
        this.addSideSlider(physicsSection, "Repel radius", "repel_radius", 20, 500, 5, "render", {
          hint: "Repulsion cutoff radius for node-to-node interactions"
        });
        this.addSideSlider(physicsSection, "Center strength", "center_strength", 1, 100, 1, "render", {
          hint: "How strongly free nodes are attracted to layout center"
        });
        this.addSideSlider(physicsSection, "Damping", "damping", 0.01, 0.9, 0.01, "render", {
          hint: "Speed damping per frame; higher means faster stop"
        });
        const groupsSection = this.createSidePanelSection(body, {
          id: "groups",
          title: "Groups",
          openByDefault: true
        });
        this.buildGroupEditorSection(groupsSection);
        const listsSection = this.createSidePanelSection(body, {
          id: "lists",
          title: "Blacklist / Whitelist",
          openByDefault: true
        });
        this.buildQueryRuleEditorSection(listsSection, {
          title: "Blacklist",
          key: "blacklist",
          hint: "Hide nodes that match query rules"
        });
        this.buildQueryRuleEditorSection(listsSection, {
          title: "Whitelist",
          key: "whitelist",
          hint: "Show only nodes that match query rules (after blacklist)"
        });
        const layoutSection = this.createSidePanelSection(body, {
          id: "layout",
          title: "Layout",
          openByDefault: true
        });
        this.addLayoutFileSearchRow(layoutSection);
        this.addSideSaveLayoutButton(layoutSection);
        this.syncSidePanelControls();
      }
      createSidePanelSection(parentEl, options = {}) {
        const sectionId = String(options.id || "").trim().toLowerCase();
        const titleText = String(options.title || "").trim() || "Section";
        const openByDefault = options.openByDefault !== false;
        const hasSavedState = sectionId ? Object.prototype.hasOwnProperty.call(this.sidePanelSectionState, sectionId) : false;
        let isOpen = hasSavedState ? !!this.sidePanelSectionState[sectionId] : openByDefault;
        const section = parentEl.createDiv({ cls: "graphfrontier-sidepanel-section" });
        const toggleBtn = section.createEl("button", {
          cls: "graphfrontier-sidepanel-section-toggle",
          text: titleText,
          attr: {
            type: "button",
            "aria-label": `Toggle ${titleText}`
          }
        });
        const content = section.createDiv({ cls: "graphfrontier-sidepanel-section-content" });
        const applyOpenState = (nextOpen, persist = true) => {
          isOpen = !!nextOpen;
          section.toggleClass("is-open", isOpen);
          toggleBtn.toggleClass("is-open", isOpen);
          toggleBtn.setAttr("aria-expanded", isOpen ? "true" : "false");
          if (!sectionId) return;
          const previousState = this.sidePanelSectionState[sectionId];
          this.sidePanelSectionState[sectionId] = isOpen;
          if (!persist) return;
          if (previousState === isOpen) return;
          if (!this.plugin.data.view_state || typeof this.plugin.data.view_state !== "object") {
            this.plugin.data.view_state = Object.assign({}, DEFAULT_DATA2.view_state);
          }
          this.plugin.data.view_state.side_panel_sections = Object.assign(
            {},
            this.sidePanelSectionState
          );
          this.plugin.schedulePersist();
        };
        applyOpenState(isOpen, false);
        this.registerDomEvent(toggleBtn, "click", (event) => {
          event.preventDefault();
          applyOpenState(!isOpen, true);
        });
        return content;
      }
      addSideToggle(parentEl, label, key, refreshMode, options = {}) {
        const isInverted = !!options.inverted;
        const hintText = String(options.hint || label);
        const toUiValue = (rawValue) => {
          const safeValue = !!rawValue;
          return isInverted ? !safeValue : safeValue;
        };
        const fromUiValue = (uiValue) => {
          const safeValue = !!uiValue;
          return isInverted ? !safeValue : safeValue;
        };
        const row = parentEl.createDiv({ cls: "graphfrontier-sidepanel-row" });
        row.setAttr("title", hintText);
        const labelEl = row.createSpan({ text: label, cls: "graphfrontier-sidepanel-label" });
        labelEl.setAttr("title", hintText);
        const button = row.createEl("button", { cls: "graphfrontier-toggle-btn" });
        button.setAttr("title", hintText);
        const updateButton = (isOn) => {
          button.setText("");
          button.toggleClass("is-on", isOn);
          button.setAttr("aria-label", `${label}: ${isOn ? "on" : "off"}`);
        };
        updateButton(toUiValue(this.plugin.data.settings[key]));
        this.sideControls.set(key, {
          type: "boolean",
          input: button,
          updateButton,
          toUiValue
        });
        this.registerDomEvent(button, "click", () => {
          const currentUiValue = toUiValue(this.plugin.data.settings[key]);
          const nextUiValue = !currentUiValue;
          this.plugin.data.settings[key] = fromUiValue(nextUiValue);
          updateButton(nextUiValue);
          this.plugin.schedulePersist();
          this.applyRefreshMode(refreshMode);
          if (typeof options.onChange === "function") {
            options.onChange(this.plugin.data.settings[key]);
          }
          if (options.rebuildPanelOnChange) {
            this.buildSidePanel();
          }
        });
      }
      addSideModifierSelect(parentEl, label, key, options = {}) {
        const hintText = String(options.hint || label);
        const row = parentEl.createDiv({ cls: "graphfrontier-sidepanel-row" });
        row.setAttr("title", hintText);
        const labelEl = row.createSpan({ text: label, cls: "graphfrontier-sidepanel-label" });
        labelEl.setAttr("title", hintText);
        const buttonEl = row.createEl("button", {
          cls: "graphfrontier-sidepanel-toggle graphfrontier-sidepanel-inline-toggle"
        });
        buttonEl.setAttr("title", hintText);
        const modifierOptions = [
          { value: "none", text: "None" },
          { value: "shift", text: "Shift" },
          { value: "ctrl", text: "Ctrl" },
          { value: "meta", text: "Meta" },
          { value: "alt", text: "Alt" }
        ];
        const modifierTextByValue = new Map(
          modifierOptions.map((optionMeta) => [optionMeta.value, optionMeta.text])
        );
        const normalize = (value) => this.normalizeModifierSetting(value, "none");
        const updateButton = (value) => {
          const normalized = normalize(value);
          const text = modifierTextByValue.get(normalized) || "None";
          buttonEl.setText(text);
          buttonEl.setAttr("aria-label", `${label}: ${text}`);
        };
        updateButton(this.plugin.data.settings[key]);
        this.sideControls.set(key, {
          type: "modifier-button",
          input: buttonEl,
          normalize,
          updateButton
        });
        this.registerDomEvent(buttonEl, "click", () => {
          const menu = new Menu(this.app);
          for (const optionMeta of modifierOptions) {
            menu.addItem(
              (item) => item.setTitle(optionMeta.text).onClick(() => {
                this.plugin.data.settings[key] = optionMeta.value;
                updateButton(optionMeta.value);
                this.plugin.schedulePersist();
              })
            );
          }
          const rect = buttonEl.getBoundingClientRect();
          this.showMenuAtPointer(menu, rect.left + rect.width / 2, rect.bottom + 2, null);
        });
      }
      addSideSlider(parentEl, label, key, min, max, step, refreshMode, options = {}) {
        const hintText = String(options.hint || label);
        const row = parentEl.createDiv({ cls: "graphfrontier-sidepanel-row" });
        row.addClass("is-slider");
        row.setAttr("title", hintText);
        const labelEl = row.createSpan({ text: label, cls: "graphfrontier-sidepanel-label" });
        labelEl.setAttr("title", hintText);
        const input = row.createEl("input", { type: "range", cls: "graphfrontier-sidepanel-slider" });
        input.setAttr("title", hintText);
        const valueEl = row.createSpan({ cls: "graphfrontier-sidepanel-value" });
        valueEl.setAttr("title", hintText);
        input.min = String(min);
        input.max = String(max);
        input.step = String(step);
        input.value = String(this.plugin.data.settings[key]);
        valueEl.setText(this.formatSliderValue(Number(input.value), step));
        this.sideControls.set(key, {
          type: "slider",
          input,
          valueEl,
          min,
          max,
          step
        });
        const applyValueFromSlider = () => {
          const parsed = Number(input.value);
          if (!Number.isFinite(parsed)) return;
          const clamped = Math.max(min, Math.min(max, parsed));
          this.plugin.data.settings[key] = clamped;
          valueEl.setText(this.formatSliderValue(clamped, step));
          if (key === "strong_pull_multiplier") {
            this.plugin.applyStrongPullToMarkedNodes();
          }
          if (key === "strong_pull_multiplier" || key === "base_link_strength" || key === "link_distance" || key === "orbit_distance" || key === "attachment_link_distance_multiplier" || key === "repel_strength" || key === "repel_radius" || key === "center_strength" || key === "damping") {
            this.kickLayoutSearch();
          }
          if (key === "link_distance" || key === "orbit_distance") {
            this.recomputeOrbitRadii();
          }
          this.plugin.schedulePersist();
          this.applyRefreshMode(refreshMode);
        };
        this.registerDomEvent(input, "input", applyValueFromSlider);
        this.registerDomEvent(input, "change", applyValueFromSlider);
      }
      addSideSaveLayoutButton(parentEl) {
        const wrap = parentEl.createDiv({ cls: "graphfrontier-sidepanel-actions" });
        const row = wrap.createDiv({ cls: "graphfrontier-sidepanel-actions-row" });
        const autosaveWrap = row.createDiv({ cls: "graphfrontier-sidepanel-autosave" });
        autosaveWrap.setAttr("title", "Automatically save layout after nodes stop moving");
        const autosaveLabel = autosaveWrap.createSpan({
          text: "Autosave",
          cls: "graphfrontier-sidepanel-label"
        });
        autosaveLabel.setAttr("title", "Automatically save layout after nodes stop moving");
        const autosaveBtn = autosaveWrap.createEl("button", { cls: "graphfrontier-toggle-btn" });
        autosaveBtn.setAttr("title", "Automatically save layout after nodes stop moving");
        const updateAutosaveButton = (isOn) => {
          autosaveBtn.setText("");
          autosaveBtn.toggleClass("is-on", isOn);
          autosaveBtn.setAttr("aria-label", `Autosave: ${isOn ? "on" : "off"}`);
        };
        updateAutosaveButton(!!this.plugin.data.settings.layout_autosave);
        this.registerDomEvent(autosaveBtn, "click", () => {
          const next = !this.plugin.data.settings.layout_autosave;
          this.plugin.data.settings.layout_autosave = next;
          updateAutosaveButton(next);
          this.plugin.schedulePersist();
        });
        const buttonsWrap = row.createDiv({ cls: "graphfrontier-sidepanel-buttons" });
        const saveButton = buttonsWrap.createEl("button", {
          cls: "graphfrontier-sidepanel-save",
          text: "Save layout"
        });
        saveButton.setAttr("title", "Save positions, settings, and pin states");
        this.registerDomEvent(saveButton, "click", async () => {
          if (this.isSearchFilled()) {
            new Notice2("Clear search field to save");
            return;
          }
          const targetLayoutFileName = this.getLayoutFileNameFromInputValue(
            this.layoutFileSearchInputEl ? this.layoutFileSearchInputEl.value : this.layoutFileSearchInputValue
          );
          await this.saveCurrentLayout({ layoutFileName: targetLayoutFileName });
        });
        const loadButton = buttonsWrap.createEl("button", {
          cls: "graphfrontier-sidepanel-save",
          text: "Load layout"
        });
        loadButton.setAttr("title", "Load last saved positions, settings, and pin states");
        this.registerDomEvent(loadButton, "click", async () => {
          await this.loadSavedLayout();
        });
        const exportButton = buttonsWrap.createEl("button", {
          cls: "graphfrontier-sidepanel-save",
          text: "Export to"
        });
        exportButton.setAttr("title", "Export static graph HTML to selected path");
        this.registerDomEvent(exportButton, "click", async () => {
          await this.commandExportStaticHtml();
        });
      }
      addLayoutFileSearchRow(parentEl) {
        this.syncLayoutFileSelectionFromPlugin();
        const row = parentEl.createDiv({ cls: "graphfrontier-find-row graphfrontier-layout-file-row" });
        const inputWrap = row.createDiv({
          cls: "graphfrontier-search-input-wrap graphfrontier-input-anchor"
        });
        const inputEl = inputWrap.createEl("input", {
          cls: "graphfrontier-find-input",
          type: "text",
          placeholder: "Select layout file..."
        });
        inputEl.value = this.layoutFileSearchInputValue;
        this.layoutFileSearchInputEl = inputEl;
        this.layoutFileSearchClearButtonEl = null;
        const deleteLayoutByName = async (layoutFileName) => {
          const normalizedName = this.plugin.normalizeLayoutFileName(layoutFileName);
          if (!normalizedName) return;
          const result = await this.plugin.deleteLayoutFile(normalizedName);
          if (!result || result.ok !== true) {
            const reason = String((result == null ? void 0 : result.reason) || "");
            if (reason === "last-layout") new Notice2("Cannot delete the last layout");
            else if (reason === "not-found") new Notice2("Layout file not found");
            else new Notice2("Failed to delete layout");
            return;
          }
          if (result.activeChanged) {
            this.syncLayoutFileSelectionFromPlugin();
            this.plugin.refreshAllViews({ forceSavedPositions: true, skipLayoutKick: true });
            this.buildSidePanel();
            this.plugin.renderAllViews();
            return;
          }
          this.layoutFileSuggestSuppressUntilMs = Date.now() + 220;
          this.closeInputSuggestMenu();
          inputEl.focus();
          this.contentEl.win.setTimeout(() => {
            this.layoutFileSuggestSuppressUntilMs = 0;
            void openLayoutSuggestionPopup("");
          }, 0);
        };
        const openLayoutSuggestionPopup = async (rawQueryOverride = null) => {
          if (Date.now() < this.layoutFileSuggestSuppressUntilMs) return;
          const requestToken = ++this.layoutFileSuggestRequestToken;
          const effectiveQuery = rawQueryOverride == null ? String(inputEl.value || "") : String(rawQueryOverride || "");
          const suggestionPack = await this.getLayoutFileSuggestionPack(effectiveQuery);
          if (requestToken !== this.layoutFileSuggestRequestToken) return;
          const items = Array.isArray(suggestionPack == null ? void 0 : suggestionPack.items) ? suggestionPack.items : [];
          if (items.length <= 0) {
            this.closeInputSuggestMenu();
            return;
          }
          const itemsWithDeleteAction = items.map(
            (item) => String((item == null ? void 0 : item.kind) || "") === "layout-file" ? Object.assign({}, item, {
              actionLabel: "x",
              actionTitle: `Delete layout "${String((item == null ? void 0 : item.title) || (item == null ? void 0 : item.value) || "").trim()}"`,
              onAction: () => {
                void deleteLayoutByName(String((item == null ? void 0 : item.value) || ""));
              }
            }) : item
          );
          this.showInputSuggestMenu(
            inputEl,
            itemsWithDeleteAction,
            (selectedText) => {
              void this.selectActiveLayoutFileByName(String(selectedText || ""));
            },
            { title: (suggestionPack == null ? void 0 : suggestionPack.menuTitle) || "" }
          );
        };
        this.registerDomEvent(inputEl, "input", () => {
          this.layoutFileSearchInputValue = String(inputEl.value || "");
          this.layoutFileSelectedName = "";
          this.syncLayoutFileSearchClearButtonVisibility();
          openLayoutSuggestionPopup();
        });
        this.registerDomEvent(inputEl, "keydown", (event) => {
          const hasActiveMenu = !!this.inputSuggestMenu && this.inputSuggestInputEl && this.inputSuggestInputEl === inputEl;
          if (hasActiveMenu && event.key === "ArrowDown") {
            event.preventDefault();
            this.moveInputSuggestSelection(1);
            return;
          }
          if (hasActiveMenu && event.key === "ArrowUp") {
            event.preventDefault();
            this.moveInputSuggestSelection(-1);
            return;
          }
          if (hasActiveMenu && event.key === "Escape") {
            event.preventDefault();
            this.closeInputSuggestMenu();
            return;
          }
          if (event.key !== "Enter") return;
          event.preventDefault();
          if (hasActiveMenu && this.selectInputSuggestActive()) return;
          this.closeInputSuggestMenu();
        });
        this.registerDomEvent(inputEl, "blur", () => {
          if (!String(inputEl.value || "").trim()) {
            this.syncLayoutFileSelectionFromPlugin();
          }
          this.contentEl.win.setTimeout(() => {
            if (!this.inputSuggestInputEl || this.inputSuggestInputEl !== inputEl) return;
            this.closeInputSuggestMenu();
          }, 0);
        });
        this.registerDomEvent(inputEl, "click", () => {
          openLayoutSuggestionPopup("");
        });
        this.registerDomEvent(inputEl, "focus", () => {
          openLayoutSuggestionPopup("");
        });
        this.syncLayoutFileSearchClearButtonVisibility();
      }
      syncLayoutFileSearchClearButtonVisibility() {
        if (!this.layoutFileSearchClearButtonEl) return;
        const textValue = this.layoutFileSearchInputEl ? this.layoutFileSearchInputEl.value : this.layoutFileSearchInputValue;
        const isVisible = String(textValue || "").trim().length > 0;
        this.layoutFileSearchClearButtonEl.toggleClass("is-visible", isVisible);
      }
      syncLayoutFileSelectionFromPlugin() {
        const activeLayoutName = this.plugin.getActiveLayoutFileName();
        const activeLayoutDisplayName = this.getLayoutDisplayName(activeLayoutName);
        this.layoutFileSearchInputValue = activeLayoutDisplayName;
        this.layoutFileSelectedName = activeLayoutName;
        if (this.layoutFileSearchInputEl) this.layoutFileSearchInputEl.value = activeLayoutDisplayName;
        this.syncLayoutFileSearchClearButtonVisibility();
      }
      async getLayoutFileSuggestionPack(rawQueryText) {
        const listPath = this.plugin.getLayoutsFolderRelativePath();
        const names = await this.plugin.listLayoutFileNames();
        const queryText = String(rawQueryText || "").trim().toLowerCase();
        const filteredNames = queryText.length <= 0 ? names : names.filter((fileName) => {
          const lowerFileName = fileName.toLowerCase();
          const lowerDisplayName = this.getLayoutDisplayName(fileName).toLowerCase();
          return lowerFileName.includes(queryText) || lowerDisplayName.includes(queryText);
        });
        const items = filteredNames.map((fileName) => ({
          title: this.getLayoutDisplayName(fileName),
          value: fileName,
          description: listPath,
          kind: "layout-file"
        }));
        return {
          menuTitle: "Layouts",
          items
        };
      }
      async selectActiveLayoutFileByName(layoutFileName) {
        const selectedName = String(layoutFileName || "").trim();
        if (!selectedName) return false;
        return this.loadSavedLayout({ layoutFileName: selectedName, silent: true });
      }
      getLayoutDisplayName(layoutFileName) {
        const rawName = String(layoutFileName || "").trim();
        return rawName.replace(/\.json$/iu, "");
      }
      getLayoutFileNameFromInputValue(rawInputValue) {
        const rawText = String(rawInputValue || "").trim();
        if (!rawText) return this.plugin.getActiveLayoutFileName();
        const selectedFileName = String(this.layoutFileSelectedName || "").trim();
        if (selectedFileName) {
          const selectedDisplay = this.getLayoutDisplayName(selectedFileName).toLowerCase();
          if (selectedDisplay === rawText.toLowerCase()) return selectedFileName;
        }
        return this.plugin.normalizeLayoutFileName(rawText);
      }
      // Search block: find/filter mode controls, source picker (name/content), and node suggestions.
      buildFindSection(parentEl) {
        const section = parentEl.createDiv({ cls: "graphfrontier-find" });
        const controlsRow = section.createDiv({ cls: "graphfrontier-find-mode-row" });
        const controlsLeft = controlsRow.createDiv({
          cls: "graphfrontier-find-mode-controls graphfrontier-find-mode-controls-left"
        });
        const findLabel = controlsLeft.createSpan({
          cls: "graphfrontier-find-mode-label",
          text: "Find"
        });
        this.searchModeFindLabelEl = findLabel;
        const modeToggle = controlsLeft.createEl("button", {
          cls: "graphfrontier-toggle-btn graphfrontier-search-mode-toggle",
          attr: { "aria-label": "Search mode toggle" }
        });
        this.searchModeToggleEl = modeToggle;
        const filterLabel = controlsLeft.createSpan({
          cls: "graphfrontier-find-mode-label",
          text: "Filter"
        });
        this.searchModeFilterLabelEl = filterLabel;
        this.syncSearchModeToggleUi();
        const searchRow = section.createDiv({ cls: "graphfrontier-find-row" });
        const searchInputWrap = searchRow.createDiv({
          cls: "graphfrontier-search-input-wrap graphfrontier-input-anchor"
        });
        const searchInput = searchInputWrap.createEl("input", {
          cls: "graphfrontier-find-input",
          type: "text",
          placeholder: "Enter query..."
        });
        searchInput.value = this.searchInputValue;
        this.searchInputEl = searchInput;
        const clearButton = searchInputWrap.createEl("button", {
          cls: "graphfrontier-search-inline-clear",
          text: "x",
          attr: { "aria-label": "Clear search" }
        });
        this.searchClearButtonEl = clearButton;
        const connectionsRow = section.createDiv({ cls: "graphfrontier-search-connections" });
        this.searchConnectionsToggleEl = connectionsRow.createEl("button", {
          cls: "graphfrontier-toggle-btn graphfrontier-search-mode-toggle",
          attr: { type: "button", role: "switch", "aria-label": "Show connections" }
        });
        connectionsRow.createSpan({ text: "Show connections" });
        this.registerDomEvent(this.searchConnectionsToggleEl, "click", () => {
          this.plugin.data.settings.show_search_connections = !this.plugin.getSettings().show_search_connections;
          this.syncSearchModeToggleUi();
          this.plugin.schedulePersist();
        });
        this.syncSearchModeToggleUi();
        const getSuggestionPack = () => {
          const rawQuery = String(searchInput.value || "");
          return this.getSearchSuggestionPack(rawQuery, Number.POSITIVE_INFINITY);
        };
        const isSuggestPopupSuppressed = () => Date.now() < this.searchSuggestSuppressUntilMs;
        const openSearchSuggestionPopup = () => {
          if (isSuggestPopupSuppressed()) return;
          const suggestionPack = getSuggestionPack();
          this.showInputSuggestMenu(
            searchInput,
            suggestionPack.items,
            (selectedText, selectedSuggestion) => {
              const suggestionKind = String((selectedSuggestion == null ? void 0 : selectedSuggestion.kind) || "");
              if (suggestionKind === "source") {
                const parsed = this.parseSearchQuery(searchInput.value || "");
                const suffixQuery = String(parsed.query || "").trim();
                const nextText = suffixQuery ? `${selectedText}${suffixQuery}` : selectedText;
                searchInput.value = nextText;
                this.searchInputValue = nextText;
                this.searchSelectedNodeId = null;
                this.syncSearchMatchesLive();
                this.syncSearchClearButtonVisibility();
                if (this.searchMode === "filter") this.kickLayoutSearch();
                this.contentEl.win.setTimeout(() => openSearchSuggestionPopup(), 0);
                return;
              }
              searchInput.value = selectedText;
              this.searchInputValue = selectedText;
              commitBestSearchSelection();
              if (this.searchMode === "filter") this.kickLayoutSearch();
            },
            { title: suggestionPack.menuTitle || "" }
          );
        };
        const commitBestSearchSelection = () => {
          const rawText = String(searchInput.value || "");
          this.commitSearchSelectionFromInput(rawText);
        };
        this.registerDomEvent(modeToggle, "click", () => {
          this.searchMode = this.searchMode === "filter" ? "find" : "filter";
          this.plugin.data.settings.search_mode = this.searchMode;
          this.syncSearchMatchesLive();
          this.markSearchVisibilityDirty();
          this.syncSearchModeToggleUi();
          this.kickLayoutSearch();
          this.plugin.schedulePersist();
        });
        this.registerDomEvent(searchInput, "input", () => {
          this.searchInputValue = String(searchInput.value || "");
          this.searchSelectedNodeId = null;
          this.syncSearchMatchesLive();
          this.syncSearchClearButtonVisibility();
          if (this.searchMode === "filter") this.kickLayoutSearch();
          openSearchSuggestionPopup();
        });
        this.registerDomEvent(searchInput, "change", () => {
          commitBestSearchSelection();
        });
        this.registerDomEvent(searchInput, "keydown", (event) => {
          const hasActiveMenu = !!this.inputSuggestMenu && this.inputSuggestInputEl && this.inputSuggestInputEl === searchInput;
          if (hasActiveMenu && event.key === "ArrowDown") {
            event.preventDefault();
            this.moveInputSuggestSelection(1);
            return;
          }
          if (hasActiveMenu && event.key === "ArrowUp") {
            event.preventDefault();
            this.moveInputSuggestSelection(-1);
            return;
          }
          if (hasActiveMenu && event.key === "Escape") {
            event.preventDefault();
            this.closeInputSuggestMenu();
            return;
          }
          if (event.key !== "Enter") return;
          event.preventDefault();
          if (hasActiveMenu && this.selectInputSuggestActive()) return;
          commitBestSearchSelection();
          this.closeInputSuggestMenu();
        });
        this.registerDomEvent(searchInput, "blur", () => {
          commitBestSearchSelection();
          this.contentEl.win.setTimeout(() => {
            if (!this.inputSuggestInputEl || this.inputSuggestInputEl !== searchInput) return;
            this.closeInputSuggestMenu();
          }, 0);
        });
        this.registerDomEvent(searchInput, "click", () => {
          openSearchSuggestionPopup();
        });
        this.registerDomEvent(clearButton, "click", (event) => {
          event.preventDefault();
          event.stopPropagation();
          this.searchSuggestSuppressUntilMs = Date.now() + 220;
          this.searchInputValue = "";
          this.searchSelectedNodeId = null;
          this.searchMatchedNodeIds = /* @__PURE__ */ new Set();
          this.markSearchVisibilityDirty();
          if (this.searchInputEl) this.searchInputEl.value = "";
          this.syncSearchClearButtonVisibility();
          if (this.searchMode === "filter") this.kickLayoutSearch();
          this.closeInputSuggestMenu();
          if (this.searchInputEl) this.searchInputEl.focus();
        });
        this.syncSearchClearButtonVisibility();
      }
      syncSearchModeToggleUi() {
        if (this.searchConnectionsToggleEl) {
          const enabled = this.plugin.getSettings().show_search_connections === true;
          this.searchConnectionsToggleEl.toggleClass("is-on", enabled);
          this.searchConnectionsToggleEl.setAttr("aria-checked", String(enabled));
        }
        if (!this.searchModeToggleEl) return;
        const safeMode = this.searchMode === "filter" ? "filter" : "find";
        this.searchModeToggleEl.toggleClass("is-on", safeMode === "filter");
        this.searchModeToggleEl.setAttr("aria-label", `Search mode: ${safeMode}`);
        if (this.searchModeFindLabelEl)
          this.searchModeFindLabelEl.toggleClass("is-active", safeMode === "find");
        if (this.searchModeFilterLabelEl)
          this.searchModeFilterLabelEl.toggleClass("is-active", safeMode === "filter");
      }
      parseDropdownQuery(rawQueryText, options = {}) {
        const allowName = options.allowName === true;
        const implicitSource = String(options.implicitSource || "").trim().toLowerCase();
        const raw = String(rawQueryText || "");
        const trimmed = raw.trim();
        const lower = trimmed.toLowerCase();
        if (allowName && lower.startsWith("name:")) {
          return {
            source: "name",
            query: trimmed.slice("name:".length).trim(),
            hasExplicitSource: true,
            parsedGroup: null
          };
        }
        const parsedGroup = this.plugin.parseGroupQuery(trimmed);
        if (parsedGroup) {
          return {
            source: parsedGroup.type,
            query: String(parsedGroup.value || "").trim(),
            hasExplicitSource: true,
            parsedGroup
          };
        }
        return {
          source: implicitSource,
          query: trimmed,
          hasExplicitSource: false,
          parsedGroup: null
        };
      }
      parseSearchQuery(rawQueryText) {
        return this.parseDropdownQuery(rawQueryText, {
          allowName: true,
          implicitSource: "content"
        });
      }
      getEffectiveSearchSource() {
        const rawText = this.searchInputEl ? this.searchInputEl.value : this.searchInputValue;
        return this.parseSearchQuery(rawText).source;
      }
      getQueryTypeOptions(options = {}) {
        const includeName = options.includeName === true;
        const base = [
          { value: "path:", description: "match path of the file" },
          { value: "file:", description: "match file name" },
          { value: "tag:", description: "search for tags" },
          { value: "line:", description: "search keywords on same line" },
          { value: "section:", description: "search keywords under same heading" },
          { value: "[property]:", description: "match property" }
        ];
        if (!includeName) return base;
        return [{ value: "name:", description: "search by node names" }, ...base];
      }
      getQueryTypeSuggestions(rawQueryText, options = {}) {
        const allowName = options.allowName === true;
        const showWhenTyping = options.showWhenTyping === true;
        const parsed = this.parseDropdownQuery(rawQueryText, {
          allowName,
          implicitSource: String(options.implicitSource || "")
        });
        if (parsed.hasExplicitSource) return [];
        const text = String(parsed.query || "").trim().toLowerCase();
        if (text && !showWhenTyping) return [];
        const optionItems = this.getQueryTypeOptions({ includeName: allowName });
        const filteredItems = text ? optionItems.filter((option) => {
          const valueText = String(option.value || "").toLowerCase();
          const descriptionText = String(option.description || "").toLowerCase();
          return valueText.includes(text) || descriptionText.includes(text);
        }) : optionItems;
        return filteredItems.map((option) => ({
          title: option.value,
          value: option.value,
          description: option.description,
          kind: "source",
          selectable: true
        }));
      }
      getQueryPropertyPrefixSuggestions(rawQueryText, limit = 2e3) {
        const cleanQuery = String(rawQueryText || "").trim();
        const maybeProperty = /^\[([^\]]*)$/i.exec(cleanQuery);
        if (!maybeProperty) return [];
        const propertyQuery = String(maybeProperty[1] || "").trim();
        const propertyKeys = this.plugin.getGroupPropertyKeySuggestions(propertyQuery, limit);
        return propertyKeys.map((propertyKey) => ({
          title: `[${propertyKey}]:`,
          value: `[${propertyKey}]:`,
          description: "",
          kind: "source",
          selectable: true
        }));
      }
      getQueryValueSuggestions(parsed, limit = 2e3) {
        var _a;
        if (!parsed || !parsed.hasExplicitSource) return [];
        if (parsed.source === "name") {
          return this.getVisibleNodeSuggestionsByName(parsed.query, limit).map((label) => ({
            title: label,
            value: `name:${label}`,
            description: "",
            kind: "node",
            selectable: true
          }));
        }
        if (parsed.source === "property") {
          const propertyKey = String(((_a = parsed.parsedGroup) == null ? void 0 : _a.propertyKey) || "").trim().toLowerCase();
          if (propertyKey === "property" && !String(parsed.query || "").trim()) {
            const propertyKeys = this.plugin.getGroupPropertyKeySuggestions("", limit);
            return propertyKeys.map((propertyName) => ({
              title: `[${propertyName}]:`,
              value: `[${propertyName}]:`,
              description: "",
              kind: "value",
              selectable: true
            }));
          }
          if (!propertyKey) return [];
          const values2 = this.plugin.getGroupValueSuggestions(
            "property",
            parsed.query,
            propertyKey,
            limit
          );
          return values2.map((value) => ({
            title: value,
            value: `[${propertyKey}]:${value}`,
            description: "",
            kind: "value",
            selectable: true
          }));
        }
        if (!["path", "file", "tag", "line", "section"].includes(parsed.source)) return [];
        const values = this.plugin.getGroupValueSuggestions(parsed.source, parsed.query, "", limit);
        return values.map((value) => ({
          title: value,
          value: `${parsed.source}:${value}`,
          description: "",
          kind: "value",
          selectable: true
        }));
      }
      getQuerySuggestionPack(rawQueryText, options = {}) {
        const allowName = options.allowName === true;
        const showTypeSuggestionsWhenTyping = options.showTypeSuggestionsWhenTyping === true;
        const implicitSource = String(options.implicitSource || "");
        const limit = Number.isFinite(options.limit) ? Number(options.limit) : Number.POSITIVE_INFINITY;
        const parsed = this.parseDropdownQuery(rawQueryText, {
          allowName,
          implicitSource
        });
        if (!parsed.hasExplicitSource) {
          if (!parsed.query) {
            return {
              items: this.getQueryTypeSuggestions(rawQueryText, {
                allowName,
                implicitSource,
                showWhenTyping: true
              }),
              menuTitle: "Search options"
            };
          }
          if (!showTypeSuggestionsWhenTyping) return { items: [], menuTitle: "" };
          const propertyPrefixItems = this.getQueryPropertyPrefixSuggestions(rawQueryText, limit);
          if (propertyPrefixItems.length > 0) {
            return { items: propertyPrefixItems, menuTitle: "Search options" };
          }
          return {
            items: this.getQueryTypeSuggestions(rawQueryText, {
              allowName,
              implicitSource,
              showWhenTyping: true
            }),
            menuTitle: "Search options"
          };
        }
        return { items: this.getQueryValueSuggestions(parsed, limit), menuTitle: "" };
      }
      getSearchSuggestionPack(rawQueryText, limit = Number.POSITIVE_INFINITY) {
        return this.getQuerySuggestionPack(rawQueryText, {
          allowName: true,
          implicitSource: "content",
          showTypeSuggestionsWhenTyping: false,
          limit
        });
      }
      getGroupQuerySuggestions(queryText = "") {
        return this.getQuerySuggestionPack(queryText, {
          allowName: true,
          implicitSource: "",
          showTypeSuggestionsWhenTyping: true,
          limit: 2e3
        });
      }
      getVisibleNodeSuggestionsByName(query = "", limit = Number.POSITIVE_INFINITY) {
        const text = String(query || "").trim().toLowerCase();
        const labels = [];
        const used = /* @__PURE__ */ new Set();
        for (const node of this.nodes) {
          const label = String((node == null ? void 0 : node.label) || "").trim();
          if (!label || used.has(label)) continue;
          used.add(label);
          labels.push(label);
        }
        labels.sort((leftLabel, rightLabel) => leftLabel.localeCompare(rightLabel));
        const filtered = [];
        for (const label of labels) {
          if (filtered.length >= limit) break;
          if (!text || label.toLowerCase().includes(text)) filtered.push(label);
        }
        return filtered;
      }
      getBestMatchingNodeByName(queryText) {
        const query = String(queryText || "").trim().toLowerCase();
        if (!query) return null;
        let bestStartsWithNode = null;
        let bestStartsWithLabel = "";
        let bestContainsNode = null;
        let bestContainsLabel = "";
        for (const node of this.nodes) {
          const label = String(node.label || "").toLowerCase();
          if (!label) continue;
          if (label === query) return node;
          if (label.startsWith(query)) {
            if (!bestStartsWithNode || label.localeCompare(bestStartsWithLabel) < 0) {
              bestStartsWithNode = node;
              bestStartsWithLabel = label;
            }
            continue;
          }
          if (label.includes(query)) {
            if (!bestContainsNode || label.localeCompare(bestContainsLabel) < 0) {
              bestContainsNode = node;
              bestContainsLabel = label;
            }
          }
        }
        return bestStartsWithNode || bestContainsNode || null;
      }
      getBestMatchingNode(queryText) {
        const parsed = this.parseSearchQuery(queryText);
        if (parsed.source !== "name") return null;
        return this.getBestMatchingNodeByName(parsed.query);
      }
      getNodeMetaForSearch(node) {
        return this.nodeMetaById.get(node.id) || node.meta || null;
      }
      nodeMatchesSearchParsed(meta, parsed) {
        var _a;
        if (!meta || !parsed) return false;
        const needle = String(parsed.query || "").trim().toLowerCase();
        if (!needle) return false;
        const includesCI = (value) => String(value || "").toLowerCase().includes(needle);
        if (parsed.source === "path") return includesCI(meta.path);
        if (parsed.source === "file") return includesCI(meta.fileName);
        if (parsed.source === "tag")
          return Array.isArray(meta.tags) && meta.tags.some((tag) => includesCI(tag));
        if (parsed.source === "section")
          return Array.isArray(meta.sections) && meta.sections.some((section) => includesCI(section));
        if (parsed.source === "line")
          return Array.isArray(meta.lines) && meta.lines.some((line) => includesCI(line));
        if (parsed.source === "property") {
          const key = String(((_a = parsed.parsedGroup) == null ? void 0 : _a.propertyKey) || "").trim().toLowerCase();
          if (!key) return false;
          const values = meta.properties instanceof Map ? meta.properties.get(key) : null;
          return Array.isArray(values) && values.some((value) => includesCI(value));
        }
        return false;
      }
      getMatchedNodeIdsForParsedSearch(parsed) {
        var _a;
        const matches = /* @__PURE__ */ new Set();
        if (!parsed) return matches;
        const queryText = String(parsed.query || "").trim().toLowerCase();
        if (!queryText) return matches;
        if (parsed.source === "content") {
          if (!this.ensureContentSearchIndexForCurrentGraph(parsed)) return matches;
          for (const node of this.nodes) {
            if ((_a = node == null ? void 0 : node.meta) == null ? void 0 : _a.isAttachment) continue;
            const contentText = this.contentSearchIndex.get(node.id);
            if (contentText && contentText.includes(queryText)) matches.add(node.id);
          }
          return matches;
        }
        if (parsed.source === "name") {
          for (const node of this.nodes) {
            if (String(node.label || "").toLowerCase().includes(queryText))
              matches.add(node.id);
          }
          return matches;
        }
        for (const node of this.nodes) {
          const meta = this.getNodeMetaForSearch(node);
          if (!meta) continue;
          if (this.nodeMatchesSearchParsed(meta, parsed)) matches.add(node.id);
        }
        return matches;
      }
      shouldUseContentSearchIndex(parsed = null) {
        const safeParsed = parsed || this.parseSearchQuery(this.searchInputEl ? this.searchInputEl.value : this.searchInputValue);
        return safeParsed && safeParsed.source === "content" && !!String(safeParsed.query || "").trim();
      }
      ensureContentSearchIndexForCurrentGraph(parsed = null) {
        if (!this.shouldUseContentSearchIndex(parsed)) return false;
        if (this.contentSearchIndexGraphVersion === this.visibilityGraphVersion) return true;
        this.scheduleContentSearchIndexRebuild();
        return false;
      }
      cancelContentSearchIndexBuild() {
        if (this.contentSearchBuildGraphVersion === -1) return;
        this.contentSearchBuildToken += 1;
        this.contentSearchBuildGraphVersion = -1;
      }
      syncSearchMatchesLive() {
        const rawText = this.searchInputEl ? this.searchInputEl.value : this.searchInputValue;
        const parsed = this.parseSearchQuery(rawText);
        if (!parsed.query || parsed.source === "name" && this.searchMode === "filter") {
          this.cancelContentSearchIndexBuild();
          this.searchMatchedNodeIds = /* @__PURE__ */ new Set();
          this.markSearchVisibilityDirty();
          return;
        }
        if (parsed.source !== "content") this.cancelContentSearchIndexBuild();
        this.searchMatchedNodeIds = this.getMatchedNodeIdsForParsedSearch(parsed);
        this.markSearchVisibilityDirty();
      }
      commitSearchSelectionFromInput(rawText) {
        const text = String(rawText || "");
        this.searchInputValue = text;
        const parsed = this.parseSearchQuery(text);
        if (!parsed.query) {
          this.searchSelectedNodeId = null;
          this.searchMatchedNodeIds = /* @__PURE__ */ new Set();
          this.markSearchVisibilityDirty();
          this.syncSearchClearButtonVisibility();
          if (this.searchMode === "filter") this.kickLayoutSearch();
          return;
        }
        if (parsed.source === "name" && this.searchMode === "filter") {
          this.searchMatchedNodeIds = /* @__PURE__ */ new Set();
          const bestNode = this.getBestMatchingNodeByName(parsed.query);
          if (!bestNode) {
            this.searchSelectedNodeId = null;
            this.markSearchVisibilityDirty();
            this.syncSearchClearButtonVisibility();
            if (this.searchMode === "filter") this.kickLayoutSearch();
            return;
          }
          this.applySearchSelectionFromNode(bestNode, { forceSource: "name" });
          this.syncSearchClearButtonVisibility();
          if (this.searchMode === "filter") this.kickLayoutSearch();
          return;
        }
        this.searchSelectedNodeId = null;
        this.searchMatchedNodeIds = this.getMatchedNodeIdsForParsedSearch(parsed);
        this.markSearchVisibilityDirty();
        this.syncSearchClearButtonVisibility();
        if (this.searchMode === "filter") this.kickLayoutSearch();
      }
      getSearchHighlightNodeIds() {
        if (this.searchMatchedNodeIds instanceof Set && this.searchMatchedNodeIds.size > 0) {
          return this.searchMatchedNodeIds;
        }
        return null;
      }
      applySearchSelectionFromNode(node, options = {}) {
        if (!node) return;
        this.searchMatchedNodeIds = /* @__PURE__ */ new Set();
        this.searchSelectedNodeId = node.id;
        this.focusNodeId = node.id;
        this.focusProgress = 1;
        const parsed = this.parseSearchQuery(
          this.searchInputEl ? this.searchInputEl.value : this.searchInputValue
        );
        const forcedSource = options && options.forceSource === "name" ? "name" : "";
        const prefix = forcedSource ? `${forcedSource}:` : parsed.hasExplicitSource ? `${parsed.source}:` : "";
        this.searchInputValue = prefix ? `${prefix}${String(node.label || "")}` : String(node.label || "");
        if (this.searchInputEl) this.searchInputEl.value = this.searchInputValue;
        this.markSearchVisibilityDirty();
        this.syncSearchClearButtonVisibility();
        this.plugin.schedulePersist();
      }
      syncSearchClearButtonVisibility() {
        if (!this.searchClearButtonEl) return;
        const textFromInput = this.searchInputEl ? this.searchInputEl.value : "";
        const effectiveText = String(textFromInput || this.searchInputValue || "").trim();
        const hasText = effectiveText.length > 0;
        this.searchClearButtonEl.toggleClass("is-visible", hasText);
        this.searchClearButtonEl.disabled = !hasText;
      }
      markGraphVisibilityDirty() {
        this.visibilityGraphVersion += 1;
        this.contentSearchIndexGraphVersion = -1;
        this.filterVisibilityCache.queryRuleVisibleGraphVersion = -1;
        this.filterVisibilityCache.queryRuleVisibleNodeIds = null;
        this.filterVisibilityCache.finalVisibleKey = "";
        this.filterVisibilityCache.finalVisibleNodeIds = null;
      }
      markSearchVisibilityDirty() {
        this.visibilitySearchVersion += 1;
        this.filterVisibilityCache.searchVisibleVersion = -1;
        this.filterVisibilityCache.searchVisibleNodeIds = null;
        this.filterVisibilityCache.finalVisibleKey = "";
        this.filterVisibilityCache.finalVisibleNodeIds = null;
      }
      markQueryRuleVisibilityDirty() {
        this.filterVisibilityCache.parsedRulesSignature = "";
        this.filterVisibilityCache.parsedBlacklistRules = [];
        this.filterVisibilityCache.parsedWhitelistRules = [];
        this.filterVisibilityCache.queryRuleVisibleGraphVersion = -1;
        this.filterVisibilityCache.queryRuleVisibleRulesSignature = "";
        this.filterVisibilityCache.queryRuleVisibleNodeIds = null;
        this.filterVisibilityCache.finalVisibleKey = "";
        this.filterVisibilityCache.finalVisibleNodeIds = null;
      }
      getActiveQueryRuleSignature() {
        var _a, _b, _c, _d;
        const serializeRules = (rules) => {
          if (!Array.isArray(rules) || rules.length === 0) return "";
          const parts = [];
          for (const rule of rules) {
            if (!rule || typeof rule !== "object") continue;
            const id = String(rule.id || "").trim();
            const query = String(rule.query || "").trim();
            const enabled = rule.enabled !== false ? "1" : "0";
            parts.push(`${id}|${enabled}|${query}`);
          }
          return parts.join("||");
        };
        const blacklistRules = (_b = (_a = this.plugin) == null ? void 0 : _a.data) == null ? void 0 : _b.blacklist;
        const whitelistRules = (_d = (_c = this.plugin) == null ? void 0 : _c.data) == null ? void 0 : _d.whitelist;
        return `b:${serializeRules(blacklistRules)}##w:${serializeRules(whitelistRules)}`;
      }
      getFilterNodeId() {
        if (this.searchMode !== "filter") return null;
        if (this.getEffectiveSearchSource() !== "name") return null;
        const rawText = this.searchInputEl ? this.searchInputEl.value : this.searchInputValue;
        const parsed = this.parseSearchQuery(rawText);
        if (parsed.query) {
          const liveBestNode = this.getBestMatchingNodeByName(parsed.query);
          if (liveBestNode) return liveBestNode.id;
        }
        return this.searchSelectedNodeId || null;
      }
      getSearchSelectedFocusNodeId() {
        if (!this.searchSelectedNodeId) return null;
        return this.nodeById.has(this.searchSelectedNodeId) ? this.searchSelectedNodeId : null;
      }
      getFilterVisibleNodeIds() {
        const queryRuleVisibleNodeIds = this.getQueryRuleVisibleNodeIds();
        const searchVisibleNodeIds = this.getSearchModeVisibleNodeIds();
        const activeRuleSignature = this.filterVisibilityCache.queryRuleVisibleRulesSignature || "";
        const finalKey = [
          this.visibilityGraphVersion,
          this.visibilitySearchVersion,
          activeRuleSignature,
          queryRuleVisibleNodeIds instanceof Set ? "q:1" : "q:0",
          searchVisibleNodeIds instanceof Set ? "s:1" : "s:0"
        ].join("|");
        if (this.filterVisibilityCache.finalVisibleKey === finalKey) {
          return this.filterVisibilityCache.finalVisibleNodeIds;
        }
        let finalVisibleNodeIds = null;
        if (!(queryRuleVisibleNodeIds instanceof Set) && !(searchVisibleNodeIds instanceof Set)) {
          finalVisibleNodeIds = null;
        } else if (!(queryRuleVisibleNodeIds instanceof Set)) {
          finalVisibleNodeIds = searchVisibleNodeIds;
        } else if (!(searchVisibleNodeIds instanceof Set)) {
          finalVisibleNodeIds = queryRuleVisibleNodeIds;
        } else {
          const combined = /* @__PURE__ */ new Set();
          for (const nodeId of queryRuleVisibleNodeIds) {
            if (searchVisibleNodeIds.has(nodeId)) combined.add(nodeId);
          }
          finalVisibleNodeIds = combined;
        }
        this.filterVisibilityCache.finalVisibleKey = finalKey;
        this.filterVisibilityCache.finalVisibleNodeIds = finalVisibleNodeIds;
        return finalVisibleNodeIds;
      }
      getSearchModeVisibleNodeIds() {
        if (this.filterVisibilityCache.searchVisibleVersion === this.visibilitySearchVersion) {
          return this.filterVisibilityCache.searchVisibleNodeIds;
        }
        let visibleNodeIds = null;
        if (this.searchMode !== "filter") {
          this.filterVisibilityCache.searchVisibleVersion = this.visibilitySearchVersion;
          this.filterVisibilityCache.searchVisibleNodeIds = null;
          return null;
        }
        const rawText = this.searchInputEl ? this.searchInputEl.value : this.searchInputValue;
        const parsed = this.parseSearchQuery(rawText);
        if (!parsed.query) {
          this.filterVisibilityCache.searchVisibleVersion = this.visibilitySearchVersion;
          this.filterVisibilityCache.searchVisibleNodeIds = null;
          return null;
        }
        if (parsed.source === "name") {
          const filterNodeId = this.getFilterNodeId();
          if (!filterNodeId) {
            visibleNodeIds = /* @__PURE__ */ new Set();
          } else {
            visibleNodeIds = /* @__PURE__ */ new Set([filterNodeId]);
          }
          const neighbors = this.neighborsById.get(filterNodeId);
          if (neighbors && visibleNodeIds) {
            for (const nodeId of neighbors) visibleNodeIds.add(nodeId);
          }
        } else if (this.searchMatchedNodeIds instanceof Set) {
          visibleNodeIds = this.searchMatchedNodeIds;
        } else {
          visibleNodeIds = /* @__PURE__ */ new Set();
        }
        this.filterVisibilityCache.searchVisibleVersion = this.visibilitySearchVersion;
        this.filterVisibilityCache.searchVisibleNodeIds = visibleNodeIds;
        return visibleNodeIds;
      }
      getQueryRuleVisibleNodeIds() {
        const ruleSignature = this.getActiveQueryRuleSignature();
        const canReuseVisibleSet = this.filterVisibilityCache.queryRuleVisibleGraphVersion === this.visibilityGraphVersion && this.filterVisibilityCache.queryRuleVisibleRulesSignature === ruleSignature;
        if (canReuseVisibleSet) {
          return this.filterVisibilityCache.queryRuleVisibleNodeIds;
        }
        if (this.filterVisibilityCache.parsedRulesSignature !== ruleSignature) {
          this.filterVisibilityCache.parsedBlacklistRules = this.getCompleteQueryRulesByKey("blacklist");
          this.filterVisibilityCache.parsedWhitelistRules = this.getCompleteQueryRulesByKey("whitelist");
          this.filterVisibilityCache.parsedRulesSignature = ruleSignature;
        }
        const blacklistRules = this.filterVisibilityCache.parsedBlacklistRules;
        const whitelistRules = this.filterVisibilityCache.parsedWhitelistRules;
        if (blacklistRules.length === 0 && whitelistRules.length === 0) {
          this.filterVisibilityCache.queryRuleVisibleGraphVersion = this.visibilityGraphVersion;
          this.filterVisibilityCache.queryRuleVisibleRulesSignature = ruleSignature;
          this.filterVisibilityCache.queryRuleVisibleNodeIds = null;
          return null;
        }
        const visibleNodeIds = new Set(this.nodes.map((node) => node.id));
        if (blacklistRules.length > 0) {
          for (const node of this.nodes) {
            const meta = this.nodeMetaById.get(node.id) || node.meta || null;
            if (!meta) continue;
            for (const parsedRule of blacklistRules) {
              if (this.nodeMatchesParsedGroup(meta, parsedRule, node)) {
                visibleNodeIds.delete(node.id);
                break;
              }
            }
          }
        }
        if (whitelistRules.length > 0) {
          const whitelistMatchedNodeIds = /* @__PURE__ */ new Set();
          for (const node of this.nodes) {
            if (!visibleNodeIds.has(node.id)) continue;
            const meta = this.nodeMetaById.get(node.id) || node.meta || null;
            if (!meta) continue;
            for (const parsedRule of whitelistRules) {
              if (this.nodeMatchesParsedGroup(meta, parsedRule, node)) {
                whitelistMatchedNodeIds.add(node.id);
                break;
              }
            }
          }
          this.filterVisibilityCache.queryRuleVisibleGraphVersion = this.visibilityGraphVersion;
          this.filterVisibilityCache.queryRuleVisibleRulesSignature = ruleSignature;
          this.filterVisibilityCache.queryRuleVisibleNodeIds = whitelistMatchedNodeIds;
          return whitelistMatchedNodeIds;
        }
        this.filterVisibilityCache.queryRuleVisibleGraphVersion = this.visibilityGraphVersion;
        this.filterVisibilityCache.queryRuleVisibleRulesSignature = ruleSignature;
        this.filterVisibilityCache.queryRuleVisibleNodeIds = visibleNodeIds;
        return visibleNodeIds;
      }
      getCompleteQueryRulesByKey(ruleKey) {
        var _a;
        const rawRules = Array.isArray((_a = this.plugin.data) == null ? void 0 : _a[ruleKey]) ? this.plugin.data[ruleKey] : [];
        const parsedRules = [];
        for (const rawRule of rawRules) {
          if (!rawRule || rawRule.enabled === false) continue;
          const queryText = String(rawRule.query || "").trim();
          if (!queryText) continue;
          const parsed = this.plugin.parseGroupQuery(queryText);
          if (!parsed || !String(parsed.value || "").trim()) continue;
          parsedRules.push(parsed);
        }
        return parsedRules;
      }
      isSearchFilled() {
        const rawText = this.searchInputEl ? this.searchInputEl.value : this.searchInputValue;
        const parsed = this.parseSearchQuery(rawText);
        return parsed.query.length > 0;
      }
      getFindFocusNodeId() {
        if (this.searchMode !== "find") return null;
        const selectedFocusNodeId = this.getSearchSelectedFocusNodeId();
        if (selectedFocusNodeId) return selectedFocusNodeId;
        if (this.getEffectiveSearchSource() !== "name") return null;
        return this.searchSelectedNodeId || null;
      }
      getActiveFocusNodeId() {
        const selectedFocusNodeId = this.getSearchSelectedFocusNodeId();
        if (selectedFocusNodeId) return selectedFocusNodeId;
        const filterFocusNodeId = this.getFilterNodeId();
        if (filterFocusNodeId) return filterFocusNodeId;
        const findFocusNodeId = this.getFindFocusNodeId();
        if (findFocusNodeId) return findFocusNodeId;
        return null;
      }
      // Shared input suggestion popup used by both search and group editor inputs.
      showInputSuggestMenu(inputEl, suggestions, onSelect, meta = {}) {
        this.closeInputSuggestMenu();
        if (!inputEl || !Array.isArray(suggestions) || suggestions.length === 0) return;
        const normalizedSuggestions = [];
        for (const rawSuggestion of suggestions) {
          if (typeof rawSuggestion === "string") {
            const textValue = String(rawSuggestion || "").trim();
            if (!textValue) continue;
            normalizedSuggestions.push({
              title: textValue,
              value: textValue,
              description: "",
              selectable: true,
              kind: "default"
            });
            continue;
          }
          const titleText = String((rawSuggestion == null ? void 0 : rawSuggestion.title) || (rawSuggestion == null ? void 0 : rawSuggestion.value) || "").trim();
          const valueText = String((rawSuggestion == null ? void 0 : rawSuggestion.value) || (rawSuggestion == null ? void 0 : rawSuggestion.title) || "").trim();
          if (!titleText || !valueText) continue;
          const onAction = rawSuggestion && typeof rawSuggestion.onAction === "function" ? rawSuggestion.onAction : null;
          normalizedSuggestions.push({
            title: titleText,
            value: valueText,
            description: String((rawSuggestion == null ? void 0 : rawSuggestion.description) || "").trim(),
            selectable: (rawSuggestion == null ? void 0 : rawSuggestion.selectable) !== false,
            kind: String((rawSuggestion == null ? void 0 : rawSuggestion.kind) || "default"),
            onAction,
            actionLabel: onAction ? String((rawSuggestion == null ? void 0 : rawSuggestion.actionLabel) || "").trim() || "x" : "",
            actionTitle: onAction ? String((rawSuggestion == null ? void 0 : rawSuggestion.actionTitle) || "").trim() : ""
          });
        }
        if (normalizedSuggestions.length <= 0) return;
        const ownerDocument = inputEl.ownerDocument || this.contentEl.ownerDocument;
        const ownerWindow = ownerDocument.defaultView || this.contentEl.win;
        if (!ownerDocument || !ownerWindow || !ownerDocument.body) return;
        const menuEl = ownerDocument.createElement("div");
        menuEl.className = "graphfrontier-input-menu";
        menuEl.setAttribute("role", "listbox");
        if (meta && typeof meta.title === "string" && meta.title.trim()) {
          const headerEl = ownerDocument.createElement("div");
          headerEl.className = "graphfrontier-input-menu-header";
          headerEl.textContent = meta.title.trim();
          menuEl.appendChild(headerEl);
        }
        const selectableEntries = [];
        for (const suggestion of normalizedSuggestions) {
          const itemEl = ownerDocument.createElement("div");
          itemEl.className = "graphfrontier-input-menu-item";
          itemEl.setAttribute("role", "option");
          const hasAction = typeof suggestion.onAction === "function";
          let textContainerEl = itemEl;
          if (hasAction) {
            itemEl.style.display = "flex";
            itemEl.style.alignItems = "flex-start";
            itemEl.style.justifyContent = "space-between";
            itemEl.style.gap = "8px";
            textContainerEl = ownerDocument.createElement("div");
            textContainerEl.style.minWidth = "0";
            textContainerEl.style.flex = "1 1 auto";
            itemEl.appendChild(textContainerEl);
          }
          const mainTextEl = ownerDocument.createElement("div");
          mainTextEl.className = "graphfrontier-input-menu-main";
          mainTextEl.textContent = suggestion.title;
          textContainerEl.appendChild(mainTextEl);
          if (suggestion.description) {
            const descEl = ownerDocument.createElement("div");
            descEl.className = "graphfrontier-input-menu-desc";
            descEl.textContent = suggestion.description;
            textContainerEl.appendChild(descEl);
          }
          if (hasAction) {
            const actionBtnEl = ownerDocument.createElement("button");
            actionBtnEl.className = "graphfrontier-group-remove";
            actionBtnEl.setAttribute("type", "button");
            const actionTitle = suggestion.actionTitle || "Delete";
            actionBtnEl.setAttribute("aria-label", actionTitle);
            actionBtnEl.setAttribute("title", actionTitle);
            actionBtnEl.textContent = suggestion.actionLabel || "x";
            actionBtnEl.addEventListener("mousedown", (event) => {
              event.preventDefault();
              event.stopPropagation();
              suggestion.onAction(suggestion);
            });
            itemEl.appendChild(actionBtnEl);
          }
          if (!suggestion.selectable) itemEl.classList.add("is-disabled");
          else {
            selectableEntries.push({ itemEl, suggestion });
            itemEl.addEventListener("mousedown", (event) => {
              event.preventDefault();
              event.stopPropagation();
              onSelect(String(suggestion.value), suggestion);
              this.closeInputSuggestMenu();
            });
          }
          menuEl.appendChild(itemEl);
        }
        const setActiveIndex = (nextIndex) => {
          if (selectableEntries.length <= 0) return false;
          const boundedIndex = (nextIndex % selectableEntries.length + selectableEntries.length) % selectableEntries.length;
          for (const entry of selectableEntries) entry.itemEl.classList.remove("is-active");
          const activeEntry = selectableEntries[boundedIndex];
          if (!activeEntry) return false;
          activeEntry.itemEl.classList.add("is-active");
          activeEntry.itemEl.scrollIntoView({ block: "nearest" });
          return true;
        };
        const placeMenu = () => {
          if (!inputEl.isConnected || !menuEl.isConnected) {
            this.closeInputSuggestMenu();
            return;
          }
          const inputRect = inputEl.getBoundingClientRect();
          const viewportWidth = Math.max(
            1,
            ownerWindow.innerWidth || ownerDocument.documentElement.clientWidth || 1
          );
          const viewportHeight = Math.max(
            1,
            ownerWindow.innerHeight || ownerDocument.documentElement.clientHeight || 1
          );
          const marginPx = 8;
          const desiredWidth = Math.max(inputRect.width, 320);
          const maxWidth = Math.max(240, viewportWidth - marginPx * 2);
          const menuWidth = Math.min(desiredWidth, maxWidth);
          const maxLeft = Math.max(marginPx, viewportWidth - menuWidth - marginPx);
          const leftPx = Math.min(Math.max(inputRect.left, marginPx), maxLeft);
          menuEl.style.width = `${menuWidth}px`;
          menuEl.style.left = `${Math.round(leftPx)}px`;
          const menuHeight = Math.max(1, menuEl.offsetHeight);
          let topPx = inputRect.bottom + 4;
          if (topPx + menuHeight > viewportHeight - marginPx) {
            topPx = Math.max(marginPx, inputRect.top - menuHeight - 4);
          }
          menuEl.style.top = `${Math.round(topPx)}px`;
        };
        ownerDocument.body.appendChild(menuEl);
        placeMenu();
        ownerWindow.requestAnimationFrame(placeMenu);
        const closeHandler = (event) => {
          if (!this.inputSuggestMenu || !this.inputSuggestMenu.menuEl) return;
          const eventTarget = event.target;
          if (!eventTarget) return;
          if (this.inputSuggestMenu.menuEl.contains(eventTarget)) return;
          if (inputEl.contains(eventTarget)) return;
          this.closeInputSuggestMenu();
        };
        const repositionHandler = () => {
          placeMenu();
        };
        ownerDocument.addEventListener("mousedown", closeHandler, true);
        ownerDocument.addEventListener("scroll", repositionHandler, true);
        ownerWindow.addEventListener("resize", repositionHandler, true);
        this.inputSuggestMenu = {
          menuEl,
          onSelect,
          ownerDocument,
          ownerWindow,
          closeHandler,
          repositionHandler,
          selectableEntries,
          activeIndex: selectableEntries.length > 0 ? 0 : -1,
          setActiveIndex
        };
        if (this.inputSuggestMenu.activeIndex >= 0) {
          this.inputSuggestMenu.setActiveIndex(this.inputSuggestMenu.activeIndex);
        }
        this.inputSuggestInputEl = inputEl;
      }
      closeInputSuggestMenu() {
        if (!this.inputSuggestMenu) return;
        const { ownerDocument, ownerWindow, closeHandler, repositionHandler } = this.inputSuggestMenu;
        if (ownerDocument && closeHandler) {
          ownerDocument.removeEventListener("mousedown", closeHandler, true);
        }
        if (ownerDocument && repositionHandler) {
          ownerDocument.removeEventListener("scroll", repositionHandler, true);
        }
        if (ownerWindow && repositionHandler) {
          ownerWindow.removeEventListener("resize", repositionHandler, true);
        }
        if (this.inputSuggestMenu.menuEl && this.inputSuggestMenu.menuEl.parentElement) {
          this.inputSuggestMenu.menuEl.remove();
        }
        this.inputSuggestMenu = null;
        this.inputSuggestInputEl = null;
      }
      moveInputSuggestSelection(delta) {
        if (!this.inputSuggestMenu || !Array.isArray(this.inputSuggestMenu.selectableEntries)) return;
        const itemCount = this.inputSuggestMenu.selectableEntries.length;
        if (itemCount <= 0) return;
        const currentIndex = Number.isInteger(this.inputSuggestMenu.activeIndex) ? this.inputSuggestMenu.activeIndex : 0;
        const nextIndex = currentIndex + Number(delta || 0);
        this.inputSuggestMenu.activeIndex = (nextIndex % itemCount + itemCount) % itemCount;
        this.inputSuggestMenu.setActiveIndex(this.inputSuggestMenu.activeIndex);
      }
      selectInputSuggestActive() {
        if (!this.inputSuggestMenu || !Array.isArray(this.inputSuggestMenu.selectableEntries))
          return false;
        const itemCount = this.inputSuggestMenu.selectableEntries.length;
        if (itemCount <= 0) return false;
        const currentIndex = Number.isInteger(this.inputSuggestMenu.activeIndex) ? this.inputSuggestMenu.activeIndex : 0;
        const boundedIndex = (currentIndex % itemCount + itemCount) % itemCount;
        const activeEntry = this.inputSuggestMenu.selectableEntries[boundedIndex];
        if (!activeEntry || !activeEntry.suggestion) return false;
        this.inputSuggestMenu.onSelect(
          String(activeEntry.suggestion.value || ""),
          activeEntry.suggestion
        );
        this.closeInputSuggestMenu();
        return true;
      }
      // Focus blending state machine for smooth highlight transitions.
      stepFocusSmoothing() {
        return stepFocusSmoothingRender(this);
      }
      // Simulation restart marker: called when settings or node positions change.
      kickLayoutSearch() {
        this.layoutEditVersion += 1;
        return kickLayoutSearchPhysics(this);
      }
      markNodeSpatialIndexDirty() {
        this.nodeSpatialIndexVersion += 1;
      }
      getNodeSpatialIndex() {
        if (this.nodeSpatialIndex && this.nodeSpatialIndexBuildVersion === this.nodeSpatialIndexVersion) {
          return this.nodeSpatialIndex;
        }
        const cellSize = Math.max(1, Number(this.nodeSpatialIndexCellSize) || 64);
        const buckets = /* @__PURE__ */ new Map();
        for (const node of this.nodes) {
          const gx = Math.floor(node.x / cellSize);
          const gy = Math.floor(node.y / cellSize);
          const key = `${gx}:${gy}`;
          let bucket = buckets.get(key);
          if (!bucket) {
            bucket = [];
            buckets.set(key, bucket);
          }
          bucket.push(node);
        }
        this.nodeSpatialIndex = { buckets, cellSize };
        this.nodeSpatialIndexBuildVersion = this.nodeSpatialIndexVersion;
        return this.nodeSpatialIndex;
      }
      isNodeSpatialIndexFresh() {
        return !!this.nodeSpatialIndex && this.nodeSpatialIndexBuildVersion === this.nodeSpatialIndexVersion;
      }
      warmNodeSpatialIndexIfIdle() {
        if (this.isNodeSpatialIndexFresh()) return;
        if (this.dragNodeId || this.panDrag || this.boxSelectDrag) return;
        if (!this.nodeSpatialIndex || this.layoutPaused) this.getNodeSpatialIndex();
      }
      // Groups block: color-rule rows, drag-and-drop priority, and settings persistence.
      buildGroupEditorSection(parentEl) {
        const section = parentEl.createDiv({ cls: "graphfrontier-groups" });
        section.createDiv({ cls: "graphfrontier-groups-title", text: "Groups" });
        this.groupEditorRows = [];
        const existingGroups = Array.isArray(this.plugin.data.groups) ? this.plugin.data.groups : [];
        for (const group of existingGroups) {
          this.addGroupEditorRow(section, group);
        }
        this.addGroupEditorRow(section, null);
      }
      parseGroupForm(group) {
        return {
          id: (group == null ? void 0 : group.id) || null,
          query: String((group == null ? void 0 : group.query) || ""),
          color: this.plugin.normalizeGroupColor((group == null ? void 0 : group.color) || "#7aa2f7")
        };
      }
      isGroupRowComplete(rowState) {
        const queryText = String(rowState.queryInput.value || "").trim();
        if (!queryText) return false;
        const parsed = this.plugin.parseGroupQuery(queryText);
        if (!parsed) return false;
        return !!String(parsed.value || "").trim();
      }
      isGroupRowEmpty(rowState) {
        const queryText = String(rowState.queryInput.value || "").trim();
        return !queryText;
      }
      refreshGroupRowState(rowState) {
        const complete = this.isGroupRowComplete(rowState);
        const empty = this.isGroupRowEmpty(rowState);
        rowState.removeBtn.style.visibility = empty ? "hidden" : "visible";
        rowState.dragHandle.style.visibility = complete ? "visible" : "hidden";
        rowState.colorInput.style.display = complete ? "" : "none";
        rowState.colorInput.disabled = !complete;
        rowState.row.draggable = complete;
        rowState.row.toggleClass("is-empty", empty);
        rowState.row.toggleClass("is-complete", complete);
      }
      persistGroupRows(sectionEl) {
        const nextGroups = [];
        for (const rowState of this.groupEditorRows) {
          const queryText = String(rowState.queryInput.value || "").trim();
          const parsed = this.plugin.parseGroupQuery(queryText);
          if (!parsed || !String(parsed.value || "").trim()) continue;
          const query = this.plugin.composeGroupQuery(
            parsed.type,
            parsed.value,
            parsed.propertyKey || ""
          );
          if (!query) continue;
          if (!rowState.id) rowState.id = this.plugin.createGroupId();
          nextGroups.push({
            id: rowState.id,
            query,
            color: this.plugin.normalizeGroupColor(rowState.colorInput.value),
            enabled: true
          });
        }
        this.plugin.updateGroups(nextGroups);
        const hasIncompleteRow = this.groupEditorRows.some(
          (rowState) => !this.isGroupRowComplete(rowState)
        );
        if (!hasIncompleteRow) this.addGroupEditorRow(sectionEl, null);
      }
      addGroupEditorRow(sectionEl, group) {
        const form = this.parseGroupForm(group);
        const row = sectionEl.createDiv({ cls: "graphfrontier-group-row" });
        const dragHandle = row.createSpan({ cls: "graphfrontier-group-drag", text: "::" });
        const queryInputWrap = row.createDiv({
          cls: "graphfrontier-group-query-wrap graphfrontier-input-anchor"
        });
        const queryInput = queryInputWrap.createEl("input", {
          cls: "graphfrontier-group-query",
          type: "text",
          placeholder: "Enter query..."
        });
        queryInput.value = form.query;
        const colorInput = row.createEl("input", {
          cls: "graphfrontier-group-color-input",
          type: "color"
        });
        colorInput.value = form.color;
        const removeBtn = row.createEl("button", { cls: "graphfrontier-group-remove", text: "x" });
        const rowState = {
          row,
          dragHandle,
          queryInput,
          colorInput,
          removeBtn,
          id: form.id
        };
        this.groupEditorRows.push(rowState);
        const openGroupSuggestMenu = () => {
          const queryText = String(rowState.queryInput.value || "");
          const suggestionPack = this.getGroupQuerySuggestions(queryText);
          const items = Array.isArray(suggestionPack == null ? void 0 : suggestionPack.items) ? suggestionPack.items : [];
          if (items.length === 0) {
            this.closeInputSuggestMenu();
            return;
          }
          this.showInputSuggestMenu(
            rowState.queryInput,
            items,
            (selectedText) => {
              rowState.queryInput.value = selectedText;
              this.refreshGroupRowState(rowState);
              this.persistGroupRows(sectionEl);
              const shouldOpenValueMenu = /:\s*$/.test(String(selectedText || "").trim());
              if (shouldOpenValueMenu) {
                this.contentEl.win.setTimeout(() => {
                  if (!rowState.queryInput) return;
                  rowState.queryInput.focus();
                  openGroupSuggestMenu();
                }, 0);
              }
            },
            { title: (suggestionPack == null ? void 0 : suggestionPack.menuTitle) || "" }
          );
        };
        this.registerDomEvent(queryInput, "input", () => {
          this.refreshGroupRowState(rowState);
          this.persistGroupRows(sectionEl);
          openGroupSuggestMenu();
        });
        this.registerDomEvent(queryInput, "keydown", (event) => {
          const hasActiveMenu = !!this.inputSuggestMenu && this.inputSuggestInputEl && this.inputSuggestInputEl === queryInput;
          if (hasActiveMenu && event.key === "ArrowDown") {
            event.preventDefault();
            this.moveInputSuggestSelection(1);
            return;
          }
          if (hasActiveMenu && event.key === "ArrowUp") {
            event.preventDefault();
            this.moveInputSuggestSelection(-1);
            return;
          }
          if (hasActiveMenu && event.key === "Escape") {
            event.preventDefault();
            this.closeInputSuggestMenu();
            return;
          }
          if (event.key !== "Enter") return;
          event.preventDefault();
          if (hasActiveMenu && this.selectInputSuggestActive()) {
            this.refreshGroupRowState(rowState);
            this.persistGroupRows(sectionEl);
            return;
          }
          this.persistGroupRows(sectionEl);
          this.closeInputSuggestMenu();
        });
        this.registerDomEvent(queryInput, "blur", () => {
          this.contentEl.win.setTimeout(() => {
            if (!this.inputSuggestInputEl || this.inputSuggestInputEl !== queryInput) return;
            this.closeInputSuggestMenu();
          }, 0);
        });
        this.registerDomEvent(queryInput, "click", () => {
          openGroupSuggestMenu();
        });
        this.registerDomEvent(queryInput, "focus", () => {
          openGroupSuggestMenu();
        });
        this.registerDomEvent(colorInput, "input", () => {
          this.persistGroupRows(sectionEl);
        });
        this.registerDomEvent(removeBtn, "click", () => {
          const index = this.groupEditorRows.indexOf(rowState);
          if (index >= 0) this.groupEditorRows.splice(index, 1);
          row.remove();
          this.persistGroupRows(sectionEl);
        });
        this.registerDomEvent(row, "dragstart", (event) => {
          if (!this.isGroupRowComplete(rowState)) {
            event.preventDefault();
            return;
          }
          this.draggingGroupRow = rowState;
          row.addClass("is-dragging");
          if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", rowState.id || "group");
          }
        });
        this.registerDomEvent(row, "dragover", (event) => {
          if (!this.draggingGroupRow || this.draggingGroupRow === rowState) return;
          event.preventDefault();
          if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
        });
        this.registerDomEvent(row, "drop", (event) => {
          if (!this.draggingGroupRow || this.draggingGroupRow === rowState) return;
          event.preventDefault();
          const fromIndex = this.groupEditorRows.indexOf(this.draggingGroupRow);
          const toIndex = this.groupEditorRows.indexOf(rowState);
          if (fromIndex < 0 || toIndex < 0) return;
          const [moved] = this.groupEditorRows.splice(fromIndex, 1);
          this.groupEditorRows.splice(toIndex, 0, moved);
          if (fromIndex < toIndex) sectionEl.insertBefore(moved.row, rowState.row.nextSibling);
          else sectionEl.insertBefore(moved.row, rowState.row);
          this.persistGroupRows(sectionEl);
        });
        this.registerDomEvent(row, "dragend", () => {
          row.removeClass("is-dragging");
          this.draggingGroupRow = null;
        });
        this.refreshGroupRowState(rowState);
      }
      buildQueryRuleEditorSection(parentEl, options = {}) {
        const ruleKey = String(options.key || "").trim().toLowerCase();
        if (!ruleKey || !["blacklist", "whitelist"].includes(ruleKey)) return;
        const section = parentEl.createDiv({ cls: "graphfrontier-groups" });
        const titleText = String(options.title || "").trim() || ruleKey;
        const titleEl = section.createDiv({ cls: "graphfrontier-groups-title", text: titleText });
        if (options.hint) titleEl.setAttr("title", String(options.hint));
        const existingRules = Array.isArray(this.plugin.data[ruleKey]) ? this.plugin.data[ruleKey] : [];
        const rowStateList = [];
        if (ruleKey === "blacklist") this.blacklistEditorRows = rowStateList;
        else this.whitelistEditorRows = rowStateList;
        for (const rule of existingRules) {
          this.addQueryRuleEditorRow(section, ruleKey, rowStateList, rule);
        }
        this.addQueryRuleEditorRow(section, ruleKey, rowStateList, null);
      }
      parseQueryRuleForm(rule) {
        return {
          id: (rule == null ? void 0 : rule.id) || null,
          query: String((rule == null ? void 0 : rule.query) || "")
        };
      }
      isQueryRuleRowComplete(rowState) {
        const queryText = String(rowState.queryInput.value || "").trim();
        if (!queryText) return false;
        const parsed = this.plugin.parseGroupQuery(queryText);
        if (!parsed) return false;
        return !!String(parsed.value || "").trim();
      }
      isQueryRuleRowEmpty(rowState) {
        const queryText = String(rowState.queryInput.value || "").trim();
        return !queryText;
      }
      refreshQueryRuleRowState(rowState) {
        const complete = this.isQueryRuleRowComplete(rowState);
        const empty = this.isQueryRuleRowEmpty(rowState);
        rowState.removeBtn.style.visibility = empty ? "hidden" : "visible";
        rowState.dragHandle.style.visibility = complete ? "visible" : "hidden";
        rowState.row.draggable = complete;
        rowState.row.toggleClass("is-empty", empty);
        rowState.row.toggleClass("is-complete", complete);
      }
      persistQueryRuleRows(sectionEl, ruleKey, rowStateList) {
        const nextRules = [];
        for (const rowState of rowStateList) {
          const queryText = String(rowState.queryInput.value || "").trim();
          const parsed = this.plugin.parseGroupQuery(queryText);
          if (!parsed || !String(parsed.value || "").trim()) continue;
          const query = this.plugin.composeGroupQuery(
            parsed.type,
            parsed.value,
            parsed.propertyKey || ""
          );
          if (!query) continue;
          if (!rowState.id) rowState.id = this.plugin.createGroupId();
          nextRules.push({
            id: rowState.id,
            query,
            enabled: true
          });
        }
        if (ruleKey === "blacklist") this.plugin.updateBlacklist(nextRules);
        else this.plugin.updateWhitelist(nextRules);
        this.markQueryRuleVisibilityDirty();
        const hasIncompleteRow = rowStateList.some(
          (rowState) => !this.isQueryRuleRowComplete(rowState)
        );
        if (!hasIncompleteRow) {
          this.addQueryRuleEditorRow(sectionEl, ruleKey, rowStateList, null);
        }
      }
      addQueryRuleEditorRow(sectionEl, ruleKey, rowStateList, rule) {
        const form = this.parseQueryRuleForm(rule);
        const row = sectionEl.createDiv({ cls: "graphfrontier-group-row" });
        const dragHandle = row.createSpan({ cls: "graphfrontier-group-drag", text: "::" });
        const queryInputWrap = row.createDiv({
          cls: "graphfrontier-group-query-wrap graphfrontier-input-anchor"
        });
        const queryInput = queryInputWrap.createEl("input", {
          cls: "graphfrontier-group-query",
          type: "text",
          placeholder: "Enter query..."
        });
        queryInput.value = form.query;
        const removeBtn = row.createEl("button", { cls: "graphfrontier-group-remove", text: "x" });
        const rowState = {
          row,
          dragHandle,
          queryInput,
          removeBtn,
          id: form.id
        };
        rowStateList.push(rowState);
        const openRuleSuggestMenu = () => {
          const queryText = String(rowState.queryInput.value || "");
          const suggestionPack = this.getGroupQuerySuggestions(queryText);
          const items = Array.isArray(suggestionPack == null ? void 0 : suggestionPack.items) ? suggestionPack.items : [];
          if (items.length === 0) {
            this.closeInputSuggestMenu();
            return;
          }
          this.showInputSuggestMenu(
            rowState.queryInput,
            items,
            (selectedText) => {
              rowState.queryInput.value = selectedText;
              this.refreshQueryRuleRowState(rowState);
              this.persistQueryRuleRows(sectionEl, ruleKey, rowStateList);
              const shouldOpenValueMenu = /:\s*$/.test(String(selectedText || "").trim());
              if (shouldOpenValueMenu) {
                this.contentEl.win.setTimeout(() => {
                  if (!rowState.queryInput) return;
                  rowState.queryInput.focus();
                  openRuleSuggestMenu();
                }, 0);
              }
            },
            { title: (suggestionPack == null ? void 0 : suggestionPack.menuTitle) || "" }
          );
        };
        this.registerDomEvent(queryInput, "input", () => {
          this.refreshQueryRuleRowState(rowState);
          this.persistQueryRuleRows(sectionEl, ruleKey, rowStateList);
          openRuleSuggestMenu();
        });
        this.registerDomEvent(queryInput, "keydown", (event) => {
          const hasActiveMenu = !!this.inputSuggestMenu && this.inputSuggestInputEl && this.inputSuggestInputEl === queryInput;
          if (hasActiveMenu && event.key === "ArrowDown") {
            event.preventDefault();
            this.moveInputSuggestSelection(1);
            return;
          }
          if (hasActiveMenu && event.key === "ArrowUp") {
            event.preventDefault();
            this.moveInputSuggestSelection(-1);
            return;
          }
          if (hasActiveMenu && event.key === "Escape") {
            event.preventDefault();
            this.closeInputSuggestMenu();
            return;
          }
          if (event.key !== "Enter") return;
          event.preventDefault();
          if (hasActiveMenu && this.selectInputSuggestActive()) {
            this.refreshQueryRuleRowState(rowState);
            this.persistQueryRuleRows(sectionEl, ruleKey, rowStateList);
            return;
          }
          this.persistQueryRuleRows(sectionEl, ruleKey, rowStateList);
          this.closeInputSuggestMenu();
        });
        this.registerDomEvent(queryInput, "blur", () => {
          this.contentEl.win.setTimeout(() => {
            if (!this.inputSuggestInputEl || this.inputSuggestInputEl !== queryInput) return;
            this.closeInputSuggestMenu();
          }, 0);
        });
        this.registerDomEvent(queryInput, "click", () => {
          openRuleSuggestMenu();
        });
        this.registerDomEvent(queryInput, "focus", () => {
          openRuleSuggestMenu();
        });
        this.registerDomEvent(removeBtn, "click", () => {
          const index = rowStateList.indexOf(rowState);
          if (index >= 0) rowStateList.splice(index, 1);
          row.remove();
          this.persistQueryRuleRows(sectionEl, ruleKey, rowStateList);
        });
        this.registerDomEvent(row, "dragstart", (event) => {
          if (!this.isQueryRuleRowComplete(rowState)) {
            event.preventDefault();
            return;
          }
          this.draggingQueryRuleRow = rowState;
          row.addClass("is-dragging");
          if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", rowState.id || "rule");
          }
        });
        this.registerDomEvent(row, "dragover", (event) => {
          if (!this.draggingQueryRuleRow || this.draggingQueryRuleRow === rowState) return;
          event.preventDefault();
          if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
        });
        this.registerDomEvent(row, "drop", (event) => {
          if (!this.draggingQueryRuleRow || this.draggingQueryRuleRow === rowState) return;
          event.preventDefault();
          const fromIndex = rowStateList.indexOf(this.draggingQueryRuleRow);
          const toIndex = rowStateList.indexOf(rowState);
          if (fromIndex < 0 || toIndex < 0) return;
          const [moved] = rowStateList.splice(fromIndex, 1);
          rowStateList.splice(toIndex, 0, moved);
          if (fromIndex < toIndex) sectionEl.insertBefore(moved.row, rowState.row.nextSibling);
          else sectionEl.insertBefore(moved.row, rowState.row);
          this.persistQueryRuleRows(sectionEl, ruleKey, rowStateList);
        });
        this.registerDomEvent(row, "dragend", () => {
          row.removeClass("is-dragging");
          this.draggingQueryRuleRow = null;
        });
        this.refreshQueryRuleRowState(rowState);
      }
      formatSliderValue(value, step) {
        const stepNum = Number(step);
        if (!Number.isFinite(stepNum) || stepNum >= 1) return String(Math.round(value));
        if (stepNum >= 0.1) return value.toFixed(1);
        if (stepNum >= 0.01) return value.toFixed(2);
        if (stepNum >= 1e-3) return value.toFixed(3);
        return value.toFixed(4);
      }
      normalizeModifierSetting(rawModifier, fallback = "none") {
        const normalized = String(rawModifier || "").trim().toLowerCase();
        if (["alt", "ctrl", "meta", "shift", "none"].includes(normalized)) return normalized;
        return String(fallback || "none").trim().toLowerCase();
      }
      isModifierActive(event, rawModifier) {
        const modifier = this.normalizeModifierSetting(rawModifier, "none");
        if (modifier === "none") return false;
        if (modifier === "alt") return !!event.altKey;
        if (modifier === "shift") return !!event.shiftKey;
        if (modifier === "meta") return !!event.metaKey;
        if (modifier === "ctrl") return !!event.ctrlKey || !!event.metaKey;
        return false;
      }
      // UI refresh helpers: keep controls synced and canvas sized to current container.
      applyRefreshMode(refreshMode) {
        if (refreshMode === "data") this.plugin.refreshAllViews();
        else this.plugin.renderAllViews();
      }
      syncSidePanelControls() {
        if (!this.sidePanelOpen || this.sideControls.size === 0) return;
        const activeEl = this.contentEl.ownerDocument ? this.contentEl.ownerDocument.activeElement : null;
        for (const [key, meta] of this.sideControls.entries()) {
          const currentValue = this.plugin.data.settings[key];
          if (meta.type === "boolean") {
            if (activeEl !== meta.input) {
              const uiValue = typeof meta.toUiValue === "function" ? meta.toUiValue(currentValue) : !!currentValue;
              meta.updateButton(uiValue);
            }
            continue;
          }
          if (meta.type === "slider" && activeEl !== meta.input) {
            const clamped = Math.max(meta.min, Math.min(meta.max, Number(currentValue)));
            const nextValue = String(clamped);
            if (meta.input.value !== nextValue) meta.input.value = nextValue;
            meta.valueEl.setText(this.formatSliderValue(clamped, meta.step));
            continue;
          }
          if (meta.type === "select" && activeEl !== meta.input) {
            const normalize = typeof meta.normalize === "function" ? meta.normalize : (value) => String(value || "").trim().toLowerCase();
            const nextValue = normalize(currentValue);
            if (meta.input.value !== nextValue) meta.input.value = nextValue;
            continue;
          }
          if (meta.type === "modifier-button" && activeEl !== meta.input) {
            const normalize = typeof meta.normalize === "function" ? meta.normalize : (value) => String(value || "").trim().toLowerCase();
            const nextValue = normalize(currentValue);
            if (typeof meta.updateButton === "function") meta.updateButton(nextValue);
          }
        }
        if (this.searchModeToggleEl) this.syncSearchModeToggleUi();
        if (this.searchInputEl && activeEl !== this.searchInputEl) {
          const nextText = String(this.searchInputValue || "");
          if (this.searchInputEl.value !== nextText) this.searchInputEl.value = nextText;
          this.syncSearchClearButtonVisibility();
        }
      }
      installResizeObserver() {
        if (typeof ResizeObserver !== "function") return;
        this.resizeObserver = new ResizeObserver(() => this.resizeCanvas());
        this.resizeObserver.observe(this.wrapEl);
      }
      handleViewportResize() {
        this.resizeCanvas();
      }
      updateWrapHeightForKeyboard() {
        if (!this.wrapEl) return;
        if (this.wrapEl.style.height) this.wrapEl.style.height = "";
        if (this.wrapEl.style.maxHeight) this.wrapEl.style.maxHeight = "";
      }
      updateCanvasBackgroundColor() {
        if (!this.contentEl) return;
        this.canvasTheme = readGraphTheme(this.contentEl);
        this.canvasBackgroundColor = this.canvasTheme.background;
      }
      resizeCanvas() {
        if (!this.canvasEl || !this.ctx) return;
        this.updateWrapHeightForKeyboard();
        this.updateCanvasBackgroundColor();
        const rect = this.wrapEl.getBoundingClientRect();
        this.viewWidth = Math.max(1, Math.floor(rect.width));
        this.viewHeight = Math.max(1, Math.floor(rect.height));
        this.devicePixelRatio = this.contentEl.win.devicePixelRatio || 1;
        this.canvasEl.width = Math.floor(this.viewWidth * this.devicePixelRatio);
        this.canvasEl.height = Math.floor(this.viewHeight * this.devicePixelRatio);
        this.ctx.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, 0, 0);
        this.render();
      }
      // In-memory graph rebuild: load nodes/edges, restore positions, and recompute neighbors.
      refreshFromVault(opts = {}) {
        const keepCamera = !!opts.keepCamera;
        const forceSavedPositions = !!opts.forceSavedPositions;
        const skipLayoutKick = !!opts.skipLayoutKick;
        const metadataResolved = !!opts.metadataResolved;
        const passive = opts.passive === true || metadataResolved;
        if (metadataResolved) {
          this.hasSeenMetadataResolvedRefresh = true;
        } else if (this.plugin.metadataResolvedOnce) {
          this.hasSeenMetadataResolvedRefresh = true;
        }
        const graphData = this.plugin.collectGraphData();
        const { topologyChanged } = this.syncGraphRuntimeState(graphData, { forceSavedPositions });
        this.markGraphVisibilityDirty();
        if (this.searchSelectedNodeId && !this.nodeById.has(this.searchSelectedNodeId)) {
          this.searchSelectedNodeId = null;
        }
        this.syncSearchMatchesLive();
        this.syncSearchClearButtonVisibility();
        if (!this.shouldUseContentSearchIndex()) {
          this.cancelContentSearchIndexBuild();
        }
        this.getNodeSpatialIndex();
        this.updateLayoutCenter();
        this.cleanupDetachedData({
          allowDestructivePrune: this.hasSeenMetadataResolvedRefresh
        });
        if (!keepCamera) {
          this.fitCameraToNodes();
          this.centerCameraOnActiveFileNode();
        }
        if (skipLayoutKick) {
          this.layoutPaused = true;
          this.layoutStillFrames = 0;
          if (forceSavedPositions) this.layoutAutosaveDirty = false;
        } else if (!passive || topologyChanged) {
          this.kickLayoutSearch();
        }
        this.render();
      }
      scheduleContentSearchIndexRebuild() {
        if (!this.shouldUseContentSearchIndex()) return;
        if (this.contentSearchBuildGraphVersion === this.visibilityGraphVersion || this.contentSearchIndexGraphVersion === this.visibilityGraphVersion) {
          return;
        }
        const buildToken = ++this.contentSearchBuildToken;
        const graphVersion = this.visibilityGraphVersion;
        this.contentSearchBuildGraphVersion = graphVersion;
        const nodesSnapshot = this.nodes.slice();
        const appRef = this.app;
        const nextIndex = /* @__PURE__ */ new Map();
        const buildIndexAsync = async () => {
          var _a;
          for (const node of nodesSnapshot) {
            if (buildToken !== this.contentSearchBuildToken || graphVersion !== this.visibilityGraphVersion)
              return;
            if (!node || ((_a = node.meta) == null ? void 0 : _a.isAttachment)) continue;
            const file = appRef.vault.getAbstractFileByPath(node.id);
            if (!file || typeof file.extension !== "string" || file.extension.toLowerCase() !== "md")
              continue;
            try {
              const contentText = await appRef.vault.cachedRead(file);
              nextIndex.set(node.id, String(contentText || "").toLowerCase());
            } catch (e) {
              continue;
            }
          }
          if (buildToken !== this.contentSearchBuildToken || graphVersion !== this.visibilityGraphVersion)
            return;
          this.contentSearchIndex = nextIndex;
          this.contentSearchIndexGraphVersion = graphVersion;
          this.contentSearchBuildGraphVersion = -1;
          this.syncSearchMatchesLive();
        };
        buildIndexAsync();
      }
      /*
       * ============================================================
       * GRAPH SYNC BLOCK
       * Runtime graph-state rebuild: create nodes, rebuild edges/neighbors, and restore constrained positions.
       * ============================================================
       */
      syncGraphRuntimeState(graphData, options = {}) {
        const oldNodes = this.nodeById;
        const oldNeighborsById = this.neighborsById;
        const { nextNodes, nextNodeById } = this.buildNextNodesFromGraphData(
          graphData.nodes,
          oldNodes,
          options
        );
        const { nextEdges, nextNeighborsById } = this.buildNextEdgesAndNeighbors(
          graphData.edges,
          nextNodeById,
          nextNodes
        );
        const topologyChanged = oldNodes.size !== nextNodeById.size || nextNodes.some((node) => !oldNodes.has(node.id)) || this.edges.length !== nextEdges.length || nextEdges.some((edge) => {
          var _a;
          return !((_a = oldNeighborsById.get(edge.source)) == null ? void 0 : _a.has(edge.target));
        });
        this.applyOrbitPinnedPositions(nextNodes, nextNodeById);
        this.nodes = nextNodes;
        this.nodeById = nextNodeById;
        this.nodeMetaById = new Map(nextNodes.map((node) => [node.id, node.meta || null]));
        this.neighborsById = nextNeighborsById;
        this.edges = nextEdges;
        this.selectedNodeIds = new Set(
          Array.from(this.selectedNodeIds).filter((nodeId) => this.nodeById.has(nodeId))
        );
        if (this.dragNodeId && !this.nodeById.has(this.dragNodeId)) this.dragNodeId = null;
        if (this.dragSelectionOffsets instanceof Map && this.dragSelectionOffsets.size > 0) {
          const nextOffsets = /* @__PURE__ */ new Map();
          for (const [nodeId, offset] of this.dragSelectionOffsets.entries()) {
            if (!this.nodeById.has(nodeId)) continue;
            nextOffsets.set(nodeId, offset);
          }
          this.dragSelectionOffsets = nextOffsets.size > 0 ? nextOffsets : null;
        }
        this.boxSelectDrag = null;
        this.applyAutoAttachmentOrbitPositions();
        this.nodeSpatialIndex = null;
        this.nodeSpatialIndexBuildVersion = -1;
        this.markNodeSpatialIndexDirty();
        return { topologyChanged };
      }
      buildNextNodesFromGraphData(rawNodes, oldNodes, options = {}) {
        const nextNodes = [];
        const nextNodeById = /* @__PURE__ */ new Map();
        let index = 0;
        for (const rawNode of rawNodes) {
          const oldNode = oldNodes.get(rawNode.id);
          const node = this.createRuntimeNode(rawNode, oldNode, index, options);
          nextNodes.push(node);
          nextNodeById.set(node.id, node);
          index += 1;
        }
        return { nextNodes, nextNodeById };
      }
      createRuntimeNode(rawNode, oldNode, index, options = {}) {
        const forceSavedPositions = !!options.forceSavedPositions;
        const pin = this.plugin.getPin(rawNode.id);
        const savedPosition = this.plugin.data.saved_positions[rawNode.id];
        let x;
        let y;
        let vx = 0;
        let vy = 0;
        if (pin) {
          x = pin.x;
          y = pin.y;
        } else if (forceSavedPositions && savedPosition && Number.isFinite(savedPosition.x) && Number.isFinite(savedPosition.y)) {
          x = Number(savedPosition.x);
          y = Number(savedPosition.y);
          vx = 0;
          vy = 0;
        } else if (oldNode) {
          x = oldNode.x;
          y = oldNode.y;
          vx = oldNode.vx;
          vy = oldNode.vy;
        } else if (savedPosition && Number.isFinite(savedPosition.x) && Number.isFinite(savedPosition.y)) {
          x = Number(savedPosition.x);
          y = Number(savedPosition.y);
          vx = 0;
          vy = 0;
        } else {
          const angle = index % 360 * (Math.PI / 180);
          const radius = 80 + 10 * Math.sqrt(index + 1);
          const jitterX = (Math.random() - 0.5) * 18;
          const jitterY = (Math.random() - 0.5) * 18;
          x = this.camera.x + Math.cos(angle) * radius + jitterX;
          y = this.camera.y + Math.sin(angle) * radius + jitterY;
        }
        return {
          id: rawNode.id,
          label: rawNode.label,
          meta: rawNode.meta || null,
          x,
          y,
          vx,
          vy,
          degree: 0
        };
      }
      buildNextEdgesAndNeighbors(rawEdges, nextNodeById, nextNodes) {
        const nextEdges = [];
        const nextNeighborsById = new Map(nextNodes.map((node) => [node.id, /* @__PURE__ */ new Set()]));
        for (const rawEdge of rawEdges) {
          const sourceNode = nextNodeById.get(rawEdge.source);
          const targetNode = nextNodeById.get(rawEdge.target);
          if (!sourceNode || !targetNode) continue;
          sourceNode.degree += 1;
          targetNode.degree += 1;
          nextNeighborsById.get(sourceNode.id).add(targetNode.id);
          nextNeighborsById.get(targetNode.id).add(sourceNode.id);
          nextEdges.push({
            source: rawEdge.source,
            target: rawEdge.target,
            sourceNode,
            targetNode
          });
        }
        return { nextEdges, nextNeighborsById };
      }
      applyOrbitPinnedPositions(nextNodes, nextNodeById) {
        for (const node of nextNodes) {
          const orbitPin = this.plugin.getOrbitPin(node.id);
          if (!orbitPin) continue;
          const anchorNode = nextNodeById.get(orbitPin.anchor_id);
          if (!anchorNode) continue;
          node.x = anchorNode.x + Math.cos(orbitPin.angle) * orbitPin.radius;
          node.y = anchorNode.y + Math.sin(orbitPin.angle) * orbitPin.radius;
          node.vx = 0;
          node.vy = 0;
        }
      }
      applyAutoAttachmentOrbitPositions() {
        const autoAttachmentOrbitMap = this.buildAttachmentAutoOrbitMap();
        for (const [nodeId, orbitMeta] of autoAttachmentOrbitMap.entries()) {
          const autoNode = this.nodeById.get(nodeId);
          const anchorNode = this.nodeById.get(orbitMeta.anchor_id);
          if (!autoNode || !anchorNode) continue;
          autoNode.x = anchorNode.x + Math.cos(orbitMeta.angle) * orbitMeta.radius;
          autoNode.y = anchorNode.y + Math.sin(orbitMeta.angle) * orbitMeta.radius;
          autoNode.vx = 0;
          autoNode.vy = 0;
        }
      }
      // Data cleanup and initial framing after graph rebuild.
      cleanupDetachedData(options = {}) {
      }
      fitCameraToNodes() {
        if (this.nodes.length === 0) {
          this.camera.x = 0;
          this.camera.y = 0;
          this.camera.zoom = 1;
          this.cameraTarget.x = this.camera.x;
          this.cameraTarget.y = this.camera.y;
          this.cameraTarget.zoom = this.camera.zoom;
          return;
        }
        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;
        for (const node of this.nodes) {
          minX = Math.min(minX, node.x);
          maxX = Math.max(maxX, node.x);
          minY = Math.min(minY, node.y);
          maxY = Math.max(maxY, node.y);
        }
        const width = Math.max(1, maxX - minX);
        const height = Math.max(1, maxY - minY);
        this.camera.x = (minX + maxX) / 2;
        this.camera.y = (minY + maxY) / 2;
        const zoomX = this.viewWidth * 0.9 / width;
        const zoomY = this.viewHeight * 0.9 / height;
        const targetZoom = Math.min(zoomX, zoomY, 1);
        this.camera.zoom = Math.min(MAX_ZOOM2, Math.max(MIN_ZOOM2, targetZoom));
        this.cameraTarget.x = this.camera.x;
        this.cameraTarget.y = this.camera.y;
        this.cameraTarget.zoom = this.camera.zoom;
      }
      // Keep first-open framing close to the user's current note when possible.
      centerCameraOnActiveFileNode() {
        var _a, _b, _c, _d;
        const activePath = (_d = (_c = (_b = (_a = this.app) == null ? void 0 : _a.workspace) == null ? void 0 : _b.getActiveFile) == null ? void 0 : _c.call(_b)) == null ? void 0 : _d.path;
        if (!activePath) return false;
        const activeNode = this.nodeById.get(activePath);
        if (!activeNode) return false;
        this.camera.x = activeNode.x;
        this.camera.y = activeNode.y;
        this.cameraTarget.x = this.camera.x;
        this.cameraTarget.y = this.camera.y;
        this.camera.zoom = Math.max(this.camera.zoom, 0.85);
        this.cameraTarget.zoom = this.camera.zoom;
        return true;
      }
      updateLayoutCenter() {
        return updateLayoutCenterPhysics(this);
      }
      /*
       * ============================================================
       * PHYSICS BLOCK
       * Simulation layer: attraction/repulsion forces, damping, orbit logic, and autosave after stabilization.
       * ============================================================
       */
      runFrame() {
        if (!this.isOpen) return;
        this.stepCameraSmoothing();
        this.stepSimulation();
        this.warmNodeSpatialIndexIfIdle();
        this.stepFocusSmoothing();
        this.render();
        this.frameHandle = this.contentEl.win.requestAnimationFrame(() => this.runFrame());
      }
      stepCameraSmoothing() {
        return stepCameraSmoothingPhysics(this);
      }
      stepSimulation() {
        return stepSimulationPhysics(this);
      }
      /*
       * ============================================================
       * RENDER BLOCK
       * Rendering layer: background, grid, edges, nodes, labels, and focus/highlight effects.
       * ============================================================
       */
      render() {
        return renderFrameRender(this);
      }
      drawGrid(ctx) {
        return drawGridRender(this, ctx);
      }
      getHoverDimAlpha(focusProgress) {
        return getHoverDimAlpha(this.plugin, focusProgress);
      }
      drawEdges(ctx) {
        return drawEdgesRender(this, ctx);
      }
      hexToRgba(hexColor, alpha) {
        return hexToRgba(hexColor, alpha);
      }
      drawNodes(ctx) {
        return drawNodesRender(this, ctx);
      }
      drawFocusedNodeTitle(ctx, node) {
        return drawFocusedNodeTitleRender(this, ctx, node);
      }
      getQuickPreviewModifier() {
        return "ctrl";
      }
      getBoxSelectModifier() {
        var _a, _b, _c;
        return this.normalizeModifierSetting(
          (_c = (_b = (_a = this.plugin) == null ? void 0 : _a.data) == null ? void 0 : _b.settings) == null ? void 0 : _c.selection_box_modifier,
          "shift"
        );
      }
      getSelectionToggleModifier() {
        var _a, _b, _c;
        return this.normalizeModifierSetting(
          (_c = (_b = (_a = this.plugin) == null ? void 0 : _a.data) == null ? void 0 : _b.settings) == null ? void 0 : _c.selection_toggle_modifier,
          "none"
        );
      }
      isNodeSelected(nodeId) {
        return this.selectedNodeIds.has(nodeId);
      }
      clearNodeSelection() {
        if (this.selectedNodeIds.size <= 0) return;
        this.selectedNodeIds.clear();
        this.plugin.renderAllViews();
      }
      toggleNodeSelection(nodeId) {
        if (!nodeId || !this.nodeById.has(nodeId)) return false;
        if (this.selectedNodeIds.has(nodeId)) this.selectedNodeIds.delete(nodeId);
        else this.selectedNodeIds.add(nodeId);
        this.plugin.renderAllViews();
        return true;
      }
      setNodeSelection(nodeIds) {
        const nextSelectedNodeIds = /* @__PURE__ */ new Set();
        if (nodeIds instanceof Set || Array.isArray(nodeIds)) {
          for (const nodeId of nodeIds) {
            if (!this.nodeById.has(nodeId)) continue;
            nextSelectedNodeIds.add(nodeId);
          }
        }
        this.selectedNodeIds = nextSelectedNodeIds;
        this.plugin.renderAllViews();
      }
      getDraggedNodeIds(seedNodeId) {
        if (!seedNodeId || !this.nodeById.has(seedNodeId)) return [];
        if (!this.selectedNodeIds.has(seedNodeId) || this.selectedNodeIds.size <= 1)
          return [seedNodeId];
        return Array.from(this.selectedNodeIds).filter((nodeId) => this.nodeById.has(nodeId));
      }
      getNodeIdsInScreenRect(screenRect) {
        if (!screenRect) return [];
        const minX = Math.min(screenRect.startX, screenRect.currentX);
        const maxX = Math.max(screenRect.startX, screenRect.currentX);
        const minY = Math.min(screenRect.startY, screenRect.currentY);
        const maxY = Math.max(screenRect.startY, screenRect.currentY);
        const selectedNodeIds = [];
        for (const node of this.nodes) {
          const point = this.worldToScreen(node.x, node.y);
          if (point.x < minX || point.x > maxX || point.y < minY || point.y > maxY) continue;
          selectedNodeIds.push(node.id);
        }
        return selectedNodeIds;
      }
      // Pointer and navigation: hover, node drag, scene pan, zoom, and node open actions.
      onMouseMove(event) {
        if (Date.now() < this.ignoreMouseUntilMs) return;
        const rect = this.canvasEl.getBoundingClientRect();
        const screenX = event.clientX - rect.left;
        const screenY = event.clientY - rect.top;
        this.lastCursorScreen = { x: screenX, y: screenY };
        if (this.boxSelectDrag) {
          this.boxSelectDrag.currentX = screenX;
          this.boxSelectDrag.currentY = screenY;
          return;
        }
        if (this.dragNodeId) {
          const world = this.screenToWorld(screenX, screenY);
          if (this.dragSelectionOffsets instanceof Map && this.dragSelectionOffsets.size > 0) {
            for (const [nodeId, offset] of this.dragSelectionOffsets.entries()) {
              const node2 = this.nodeById.get(nodeId);
              if (!node2) continue;
              node2.x = world.x + offset.x;
              node2.y = world.y + offset.y;
              node2.vx = 0;
              node2.vy = 0;
            }
            if (this.dragStartScreen) {
              const ddx = screenX - this.dragStartScreen.x;
              const ddy = screenY - this.dragStartScreen.y;
              this.dragMovedDistance = Math.max(
                this.dragMovedDistance,
                Math.sqrt(ddx * ddx + ddy * ddy)
              );
            }
            this.markNodeSpatialIndexDirty();
            return;
          }
          const node = this.nodeById.get(this.dragNodeId);
          if (node) {
            node.x = world.x + this.dragNodeOffset.x;
            node.y = world.y + this.dragNodeOffset.y;
            node.vx = 0;
            node.vy = 0;
            if (this.dragStartScreen) {
              const ddx = screenX - this.dragStartScreen.x;
              const ddy = screenY - this.dragStartScreen.y;
              this.dragMovedDistance = Math.max(
                this.dragMovedDistance,
                Math.sqrt(ddx * ddx + ddy * ddy)
              );
            }
            this.markNodeSpatialIndexDirty();
          }
          return;
        }
        if (this.panDrag) {
          const dx = screenX - this.panDrag.startX;
          const dy = screenY - this.panDrag.startY;
          this.panDragMovedDistance = Math.max(this.panDragMovedDistance, Math.sqrt(dx * dx + dy * dy));
          this.cameraTarget.x = this.panDrag.startCameraX - dx / this.panDrag.startZoom;
          this.cameraTarget.y = this.panDrag.startCameraY - dy / this.panDrag.startZoom;
          this.persistViewState();
          return;
        }
        const hoverNode = this.getNodeAtScreen(screenX, screenY);
        this.hoverNodeId = hoverNode ? hoverNode.id : null;
      }
      onMouseDown(event) {
        if (Date.now() < this.ignoreMouseUntilMs) return;
        if (event.button !== 0) return;
        const rect = this.canvasEl.getBoundingClientRect();
        const screenX = event.clientX - rect.left;
        const screenY = event.clientY - rect.top;
        const node = this.getNodeAtScreen(screenX, screenY);
        const selectionToggleModifier = this.getSelectionToggleModifier();
        const quickPreviewModifier = this.getQuickPreviewModifier();
        const boxSelectModifier = this.getBoxSelectModifier();
        if (node) {
          if (this.isModifierActive(event, selectionToggleModifier)) {
            this.toggleNodeSelection(node.id);
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          if (this.isModifierActive(event, quickPreviewModifier)) {
            this.toggleQuickPreview(node.id, event.clientX, event.clientY);
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          const world = this.screenToWorld(screenX, screenY);
          const dragNodeIds = this.getDraggedNodeIds(node.id);
          this.dragNodeId = node.id;
          if (dragNodeIds.length > 1) {
            this.dragSelectionOffsets = /* @__PURE__ */ new Map();
            for (const dragNodeId of dragNodeIds) {
              const dragNode = this.nodeById.get(dragNodeId);
              if (!dragNode) continue;
              this.dragSelectionOffsets.set(dragNodeId, {
                x: dragNode.x - world.x,
                y: dragNode.y - world.y
              });
            }
            this.dragNodeOffset = { x: 0, y: 0 };
          } else {
            this.dragSelectionOffsets = null;
            this.dragNodeOffset = {
              x: node.x - world.x,
              y: node.y - world.y
            };
          }
          this.dragStartScreen = { x: screenX, y: screenY };
          this.dragMovedDistance = 0;
          this.canvasEl.addClass("is-dragging");
          return;
        }
        if (this.boxSelectArmed || this.isModifierActive(event, boxSelectModifier)) {
          this.boxSelectDrag = {
            startX: screenX,
            startY: screenY,
            currentX: screenX,
            currentY: screenY
          };
          this.boxSelectArmed = false;
          this.panDrag = null;
          this.canvasEl.addClass("is-dragging");
          return;
        }
        this.panDrag = {
          startX: screenX,
          startY: screenY,
          startCameraX: this.cameraTarget.x,
          startCameraY: this.cameraTarget.y,
          startZoom: this.cameraTarget.zoom
        };
        this.panDragMovedDistance = 0;
        this.canvasEl.addClass("is-dragging");
      }
      onMouseUp(event = null, options = {}) {
        const fromTouch = !!(options && options.fromTouch);
        const suppressClick = !!(options && options.suppressClick);
        if (!fromTouch && Date.now() < this.ignoreMouseUntilMs) return;
        if (this.boxSelectDrag) {
          const selectedNodeIds = this.getNodeIdsInScreenRect(this.boxSelectDrag);
          this.setNodeSelection(selectedNodeIds);
          this.boxSelectDrag = null;
          this.dragNodeId = null;
          this.dragSelectionOffsets = null;
          this.dragStartScreen = null;
          this.dragMovedDistance = 0;
          this.panDrag = null;
          this.canvasEl.removeClass("is-dragging");
          return;
        }
        let clickedNodeId = null;
        const hadDraggedNode = !!this.dragNodeId;
        const hadPanDrag = !!this.panDrag;
        const panDragMovedDistance = this.panDragMovedDistance;
        const didDragNodeMove = hadDraggedNode && this.dragMovedDistance > 3;
        const draggedNodeId = this.dragNodeId;
        const draggedNodeIds = this.dragSelectionOffsets instanceof Map && this.dragSelectionOffsets.size > 0 ? Array.from(this.dragSelectionOffsets.keys()) : draggedNodeId ? [draggedNodeId] : [];
        if (draggedNodeId) {
          if (this.dragMovedDistance <= 3) clickedNodeId = draggedNodeId;
          for (const movedNodeId of draggedNodeIds) {
            const draggedNode = this.nodeById.get(movedNodeId);
            if (!draggedNode || !this.plugin.isPinned(movedNodeId)) continue;
            const pinMode = this.plugin.getPinMode(movedNodeId);
            if (pinMode === "grid") {
              const snapped = this.snapPositionToGrid(movedNodeId, draggedNode.x, draggedNode.y);
              draggedNode.x = snapped.x;
              draggedNode.y = snapped.y;
              draggedNode.vx = 0;
              draggedNode.vy = 0;
              this.plugin.setPin(movedNodeId, { x: snapped.x, y: snapped.y }, { mode: "grid" });
            } else {
              this.plugin.setPin(
                movedNodeId,
                { x: draggedNode.x, y: draggedNode.y },
                { mode: "exact" }
              );
            }
          }
        }
        this.dragNodeId = null;
        this.dragSelectionOffsets = null;
        this.dragStartScreen = null;
        this.dragMovedDistance = 0;
        this.panDrag = null;
        this.panDragMovedDistance = 0;
        this.canvasEl.removeClass("is-dragging");
        if (didDragNodeMove) this.kickLayoutSearch();
        const isBackgroundClick = !hadDraggedNode && hadPanDrag && panDragMovedDistance <= 3;
        if (isBackgroundClick) {
          this.clearNodeSelection();
          this.boxSelectArmed = false;
        }
        if (!suppressClick && clickedNodeId && draggedNodeIds.length <= 1 && event && event.button === 0) {
          this.clickFlashNodeId = clickedNodeId;
          this.clickFlashUntilMs = Date.now() + 180;
          this.openNodeFile(clickedNodeId);
        }
      }
      closeQuickPreview() {
        if (!this.quickPreviewEl) return;
        this.quickPreviewEl.classList.remove("is-open");
        this.quickPreviewNodeId = null;
        this.quickPreviewLoadToken += 1;
      }
      async toggleQuickPreview(nodeId, clientX, clientY) {
        if (!this.quickPreviewEl || !this.quickPreviewTitleEl || !this.quickPreviewBodyEl) return;
        const isOpen = this.quickPreviewEl.classList.contains("is-open");
        if (isOpen && this.quickPreviewNodeId === nodeId) {
          this.closeQuickPreview();
          return;
        }
        this.quickPreviewNodeId = nodeId;
        const rect = this.wrapEl.getBoundingClientRect();
        const panelWidth = 380;
        const panelHeight = 360;
        const offset = 12;
        const targetLeft = Number(clientX) - rect.left + offset;
        const targetTop = Number(clientY) - rect.top + offset;
        const maxLeft = Math.max(8, this.viewWidth - panelWidth - 8);
        const maxTop = Math.max(8, this.viewHeight - panelHeight - 8);
        const clampedLeft = Math.max(8, Math.min(maxLeft, targetLeft));
        const clampedTop = Math.max(8, Math.min(maxTop, targetTop));
        this.quickPreviewEl.style.left = `${clampedLeft}px`;
        this.quickPreviewEl.style.top = `${clampedTop}px`;
        this.quickPreviewEl.classList.add("is-open");
        this.quickPreviewTitleEl.setText(nodeId);
        this.quickPreviewBodyEl.setText("Loading...");
        const loadToken = ++this.quickPreviewLoadToken;
        const abstractFile = this.app.vault.getAbstractFileByPath(nodeId);
        if (!abstractFile || typeof abstractFile.extension !== "string" || abstractFile.extension.toLowerCase() !== "md") {
          if (loadToken !== this.quickPreviewLoadToken) return;
          this.quickPreviewBodyEl.setText("Preview is available only for markdown nodes.");
          return;
        }
        const markdownText = await this.app.vault.cachedRead(abstractFile);
        if (loadToken !== this.quickPreviewLoadToken) return;
        const sourcePath = abstractFile.path || nodeId;
        this.quickPreviewTitleEl.setText(sourcePath);
        this.quickPreviewBodyEl.empty();
        if (MarkdownRenderer && typeof MarkdownRenderer.render === "function") {
          await MarkdownRenderer.render(
            this.app,
            markdownText || "",
            this.quickPreviewBodyEl,
            sourcePath,
            this
          );
        } else if (MarkdownRenderer && typeof MarkdownRenderer.renderMarkdown === "function") {
          await MarkdownRenderer.renderMarkdown(
            markdownText || "",
            this.quickPreviewBodyEl,
            sourcePath,
            this
          );
        } else {
          this.quickPreviewBodyEl.setText(markdownText || "(empty)");
        }
        if (loadToken !== this.quickPreviewLoadToken) return;
        if (!markdownText || !markdownText.trim()) this.quickPreviewBodyEl.setText("(empty)");
        this.quickPreviewBodyEl.scrollTop = 0;
      }
      onWheel(event) {
        if (Date.now() < this.ignoreMouseUntilMs) return;
        event.preventDefault();
        const rect = this.canvasEl.getBoundingClientRect();
        const screenX = event.clientX - rect.left;
        const screenY = event.clientY - rect.top;
        const before = this.screenToWorldWithCamera(screenX, screenY, this.cameraTarget);
        const zoomFactor = Math.pow(ZOOM_STEP_FACTOR2, -event.deltaY / 100);
        const nextZoom = Math.min(MAX_ZOOM2, Math.max(MIN_ZOOM2, this.cameraTarget.zoom * zoomFactor));
        this.cameraTarget.zoom = nextZoom;
        const after = this.screenToWorldWithCamera(screenX, screenY, this.cameraTarget);
        this.cameraTarget.x += before.x - after.x;
        this.cameraTarget.y += before.y - after.y;
        this.persistViewState();
      }
      // Touch navigation on mobile: one finger drags node/pans scene, two fingers pinch+pan camera.
      onTouchStart(event) {
        if (!event.touches || event.touches.length === 0) return;
        this.ignoreMouseUntilMs = Date.now() + 700;
        if (event.cancelable) event.preventDefault();
        this.clearTouchLongPressTimer();
        if (event.touches.length >= 2) {
          this.startPinchGesture(event);
          return;
        }
        const point = this.getTouchScreenPoint(event.touches[0]);
        if (!point) return;
        const node = this.startSingleTouchGesture(point);
        if (node)
          this.scheduleTouchLongPress(node.id, event.touches[0].clientX, event.touches[0].clientY);
      }
      onTouchMove(event) {
        if (!event.touches || event.touches.length === 0) return;
        this.ignoreMouseUntilMs = Date.now() + 700;
        if (event.cancelable) event.preventDefault();
        if (event.touches.length >= 2) {
          this.clearTouchLongPressTimer();
          if (!this.touchGesture || this.touchGesture.mode !== "pinch") {
            this.startPinchGesture(event);
          }
          this.updatePinchGesture(event);
          return;
        }
        const point = this.getTouchScreenPoint(event.touches[0]);
        if (!point) return;
        this.lastCursorScreen = { x: point.x, y: point.y };
        if (this.touchGesture && this.touchGesture.mode === "single") {
          const dx2 = point.x - this.touchGesture.startX;
          const dy2 = point.y - this.touchGesture.startY;
          const moved = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          if (moved > 10) {
            this.touchGesture.moved = true;
            this.clearTouchLongPressTimer();
          }
          if (this.touchGesture.longPressTriggered) return;
        }
        if (this.dragNodeId) {
          const node = this.nodeById.get(this.dragNodeId);
          if (node) {
            const world = this.screenToWorld(point.x, point.y);
            node.x = world.x + this.dragNodeOffset.x;
            node.y = world.y + this.dragNodeOffset.y;
            node.vx = 0;
            node.vy = 0;
            if (this.dragStartScreen) {
              const ddx = point.x - this.dragStartScreen.x;
              const ddy = point.y - this.dragStartScreen.y;
              this.dragMovedDistance = Math.max(
                this.dragMovedDistance,
                Math.sqrt(ddx * ddx + ddy * ddy)
              );
            }
            this.markNodeSpatialIndexDirty();
          }
          return;
        }
        if (!this.panDrag) {
          this.panDrag = {
            startX: point.x,
            startY: point.y,
            startCameraX: this.cameraTarget.x,
            startCameraY: this.cameraTarget.y,
            startZoom: this.cameraTarget.zoom
          };
          this.canvasEl.addClass("is-dragging");
        }
        const dx = point.x - this.panDrag.startX;
        const dy = point.y - this.panDrag.startY;
        this.cameraTarget.x = this.panDrag.startCameraX - dx / this.panDrag.startZoom;
        this.cameraTarget.y = this.panDrag.startCameraY - dy / this.panDrag.startZoom;
        this.persistViewState();
      }
      onTouchEnd(event) {
        this.ignoreMouseUntilMs = Date.now() + 700;
        if (event && event.cancelable) event.preventDefault();
        const touchesCount = event && event.touches ? event.touches.length : 0;
        if (touchesCount >= 2) {
          this.clearTouchLongPressTimer();
          this.startPinchGesture(event);
          return;
        }
        if (touchesCount === 1) {
          const point = this.getTouchScreenPoint(event.touches[0]);
          this.touchGesture = null;
          this.dragNodeId = null;
          this.dragStartScreen = null;
          this.dragMovedDistance = 0;
          if (point) {
            this.panDrag = {
              startX: point.x,
              startY: point.y,
              startCameraX: this.cameraTarget.x,
              startCameraY: this.cameraTarget.y,
              startZoom: this.cameraTarget.zoom
            };
          }
          this.canvasEl.addClass("is-dragging");
          return;
        }
        const hadLongPress = !!this.touchGesture && this.touchGesture.mode === "single" && !!this.touchGesture.longPressTriggered;
        this.touchGesture = null;
        this.clearTouchLongPressTimer();
        this.onMouseUp({ button: 0 }, { fromTouch: true, suppressClick: hadLongPress });
      }
      startSingleTouchGesture(point) {
        this.touchGesture = {
          mode: "single",
          startX: point.x,
          startY: point.y,
          moved: false,
          longPressTriggered: false
        };
        this.lastCursorScreen = { x: point.x, y: point.y };
        const node = this.getNodeAtScreen(point.x, point.y);
        if (node) {
          this.touchGesture.nodeId = node.id;
          const world = this.screenToWorld(point.x, point.y);
          this.dragNodeId = node.id;
          this.dragNodeOffset = {
            x: node.x - world.x,
            y: node.y - world.y
          };
          this.dragStartScreen = { x: point.x, y: point.y };
          this.dragMovedDistance = 0;
          this.canvasEl.addClass("is-dragging");
          return node;
        }
        this.panDrag = {
          startX: point.x,
          startY: point.y,
          startCameraX: this.cameraTarget.x,
          startCameraY: this.cameraTarget.y,
          startZoom: this.cameraTarget.zoom
        };
        this.canvasEl.addClass("is-dragging");
        return null;
      }
      startPinchGesture(event) {
        const first = event && event.touches ? event.touches[0] : null;
        const second = event && event.touches ? event.touches[1] : null;
        if (!first || !second) return;
        const pointA = this.getTouchScreenPoint(first);
        const pointB = this.getTouchScreenPoint(second);
        if (!pointA || !pointB) return;
        const midX = (pointA.x + pointB.x) * 0.5;
        const midY = (pointA.y + pointB.y) * 0.5;
        const dist = Math.max(1, Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y));
        const anchor = this.screenToWorldWithCamera(midX, midY, this.cameraTarget);
        this.dragNodeId = null;
        this.dragStartScreen = null;
        this.dragMovedDistance = 0;
        this.panDrag = null;
        this.clearTouchLongPressTimer();
        this.canvasEl.addClass("is-dragging");
        this.touchGesture = {
          mode: "pinch",
          touchIdA: first.identifier,
          touchIdB: second.identifier,
          startDistance: dist,
          startCameraX: this.cameraTarget.x,
          startCameraY: this.cameraTarget.y,
          startCameraZoom: this.cameraTarget.zoom,
          anchorWorldX: anchor.x,
          anchorWorldY: anchor.y
        };
      }
      updatePinchGesture(event) {
        if (!this.touchGesture || this.touchGesture.mode !== "pinch") return;
        const touchA = this.findTouchById(event.touches, this.touchGesture.touchIdA);
        const touchB = this.findTouchById(event.touches, this.touchGesture.touchIdB);
        if (!touchA || !touchB) {
          this.startPinchGesture(event);
          return;
        }
        const pointA = this.getTouchScreenPoint(touchA);
        const pointB = this.getTouchScreenPoint(touchB);
        if (!pointA || !pointB) return;
        const midX = (pointA.x + pointB.x) * 0.5;
        const midY = (pointA.y + pointB.y) * 0.5;
        const dist = Math.max(1, Math.hypot(pointA.x - pointB.x, pointA.y - pointB.y));
        const zoomScale = dist / Math.max(1, this.touchGesture.startDistance);
        const nextZoom = Math.min(
          MAX_ZOOM2,
          Math.max(MIN_ZOOM2, this.touchGesture.startCameraZoom * zoomScale)
        );
        const cameraAtStartCenter = {
          x: this.touchGesture.startCameraX,
          y: this.touchGesture.startCameraY,
          zoom: nextZoom
        };
        const worldAtCurrentCenter = this.screenToWorldWithCamera(midX, midY, cameraAtStartCenter);
        this.cameraTarget.zoom = nextZoom;
        this.cameraTarget.x = this.touchGesture.startCameraX + (this.touchGesture.anchorWorldX - worldAtCurrentCenter.x);
        this.cameraTarget.y = this.touchGesture.startCameraY + (this.touchGesture.anchorWorldY - worldAtCurrentCenter.y);
        this.persistViewState();
      }
      getTouchScreenPoint(touch) {
        if (!touch || !this.canvasEl) return null;
        const rect = this.canvasEl.getBoundingClientRect();
        return {
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top
        };
      }
      findTouchById(touches, id) {
        if (!touches) return null;
        for (const touch of touches) {
          if (touch.identifier === id) return touch;
        }
        return null;
      }
      scheduleTouchLongPress(nodeId, clientX, clientY) {
        this.clearTouchLongPressTimer();
        this.touchLongPressTimer = window.setTimeout(() => {
          if (!this.touchGesture || this.touchGesture.mode !== "single") return;
          if (this.touchGesture.moved || this.touchGesture.longPressTriggered) return;
          if (this.touchGesture.nodeId !== nodeId) return;
          this.touchGesture.longPressTriggered = true;
          this.dragNodeId = null;
          this.dragStartScreen = null;
          this.dragMovedDistance = 0;
          this.panDrag = null;
          this.canvasEl.removeClass("is-dragging");
          this.openTouchContextMenuAt(clientX, clientY);
        }, 450);
      }
      clearTouchLongPressTimer() {
        if (!this.touchLongPressTimer) return;
        window.clearTimeout(this.touchLongPressTimer);
        this.touchLongPressTimer = null;
      }
      openTouchContextMenuAt(clientX, clientY) {
        if (!this.canvasEl) return;
        const rect = this.canvasEl.getBoundingClientRect();
        const screenX = clientX - rect.left;
        const screenY = clientY - rect.top;
        this.lastCursorScreen = { x: screenX, y: screenY };
        const node = this.getNodeAtScreen(screenX, screenY);
        if (!node) return;
        this.showNodeContextMenu(node, clientX, clientY, null);
      }
      // Node context menu: standard Obsidian actions plus GraphFrontier actions.
      onContextMenu(event) {
        event.preventDefault();
        const rect = this.canvasEl.getBoundingClientRect();
        const screenX = event.clientX - rect.left;
        const screenY = event.clientY - rect.top;
        this.lastCursorScreen = { x: screenX, y: screenY };
        const node = this.getNodeAtScreen(screenX, screenY);
        if (!node) return;
        this.showNodeContextMenu(node, event.clientX, event.clientY, event);
      }
      showNodeContextMenu(node, clientX, clientY, sourceMouseEvent = null) {
        const menu = buildNodeContextMenu(this, node, clientX, clientY);
        this.showMenuAtPointer(menu, clientX, clientY, sourceMouseEvent);
      }
      addVisualSettingsToMenu(menu, node, clientX, clientY) {
        menu.addItem((item) => {
          var _a;
          item.setTitle("Text size").setIcon("type");
          const controls = item.dom.createDiv({ cls: "graphfrontier-node-text-size" });
          const input = controls.createEl("input", { type: "range" });
          input.min = "5";
          input.max = "20";
          input.step = "1";
          input.setAttribute("aria-label", "Node text size");
          input.value = String(
            (_a = this.plugin.getNodeLabelSize(node.id)) != null ? _a : this.plugin.getSettings().label_font_size
          );
          const value = controls.createSpan({ text: input.value });
          controls.addEventListener("click", (event) => event.stopPropagation());
          controls.addEventListener("mousedown", (event) => event.stopPropagation());
          controls.addEventListener("keydown", (event) => event.stopPropagation());
          input.addEventListener("input", () => {
            value.setText(input.value);
            this.plugin.setNodeLabelSize(node.id, Number(input.value));
          });
        });
        if (this.plugin.getNodeLabelSize(node.id) !== null) {
          menu.addItem(
            (item) => item.setTitle("Use global text size").setIcon("reset").onClick(() => this.plugin.setNodeLabelSize(node.id, null))
          );
        }
        const isStrongPullNode = this.plugin.isStrongPullNode(node.id);
        if (!isStrongPullNode) {
          menu.addItem(
            (item) => item.setTitle("Strong pull").setIcon("zap").onClick(async () => {
              const strong = this.plugin.clampStrongPullMultiplier(
                this.plugin.getSettings().strong_pull_multiplier
              );
              this.plugin.setNodeMultiplier(node.id, strong, { mode: "strong-pull" });
              this.kickLayoutSearch();
              new Notice2(`Strong pull: ${node.id} x${strong.toFixed(2)}`);
            })
          );
        }
        const nodeMultiplier = this.plugin.getNodeMultiplier(node.id);
        if (nodeMultiplier > 1 || isStrongPullNode) {
          menu.addItem(
            (item) => item.setTitle("Clear strong pull").setIcon("x").onClick(async () => {
              this.plugin.clearNodeMultiplier(node.id);
              this.kickLayoutSearch();
              new Notice2(`Strong pull cleared: ${node.id}`);
            })
          );
        }
        menu.addItem(
          (item) => item.setTitle("Paint edges").setIcon("palette").onClick(async () => {
            await this.promptPickPaintedEdgeColor(node.id, clientX, clientY);
          })
        );
        if (this.plugin.getPaintedEdgeColor(node.id)) {
          menu.addItem(
            (item) => item.setTitle("Clear painted edges").setIcon("x").onClick(async () => {
              this.plugin.clearPaintedEdgeColor(node.id);
              this.plugin.renderAllViews();
              new Notice2(`Painted edges cleared: ${node.id}`);
            })
          );
        }
      }
      addContextSubmenuItem(menu, options) {
        menu.addItem((item) => item.setTitle(options.title).setIcon(options.icon || "chevron-right"));
        const menuItem = menu.items[menu.items.length - 1];
        if (menuItem && typeof menuItem.setSubmenu === "function") {
          const submenu = menuItem.setSubmenu();
          options.fillSubmenu(submenu);
          return;
        }
        if (!menuItem) return;
        menuItem.onClick(() => {
          const submenu = new Menu(this.app);
          options.fillSubmenu(submenu);
          this.contentEl.win.setTimeout(() => {
            this.showMenuAtPointer(submenu, options.clientX, options.clientY, null);
          }, 0);
        });
      }
      addLinkedNodesActionsToMenu(menu, nodeId) {
        menu.addItem(
          (item) => item.setTitle("Pin linked nodes").setIcon("pin").onClick(async () => {
            await this.pinLinkedNodes(nodeId);
          })
        );
        menu.addItem(
          (item) => item.setTitle("Pin linked nodes to grid").setIcon("pin").onClick(async () => {
            await this.pinLinkedNodesToGrid(nodeId);
          })
        );
        menu.addItem(
          (item) => item.setTitle("Pin linked nodes to orbit").setIcon("orbit").onClick(async () => {
            await this.pinLinkedNodesToOrbit(nodeId);
          })
        );
        menu.addItem(
          (item) => item.setTitle("Unpin linked nodes").setIcon("pin-off").onClick(async () => {
            await this.unpinLinkedNodes(nodeId);
          })
        );
      }
      addAttachmentNodesActionsToMenu(menu, nodeId) {
        menu.addItem(
          (item) => item.setTitle("Pin attachments").setIcon("pin").onClick(async () => {
            await this.pinLinkedNodes(nodeId, {
              targetKind: "attachment",
              targetLabel: "attachments"
            });
          })
        );
        menu.addItem(
          (item) => item.setTitle("Pin attachments to grid").setIcon("pin").onClick(async () => {
            await this.pinLinkedNodesToGrid(nodeId, {
              targetKind: "attachment",
              targetLabel: "attachments"
            });
          })
        );
        menu.addItem(
          (item) => item.setTitle("Pin attachments to orbit").setIcon("orbit").onClick(async () => {
            await this.pinLinkedNodesToOrbit(nodeId, {
              targetKind: "attachment",
              targetLabel: "attachments"
            });
          })
        );
        menu.addItem(
          (item) => item.setTitle("Unpin attachments").setIcon("pin-off").onClick(async () => {
            await this.unpinLinkedNodes(nodeId, {
              targetKind: "attachment",
              targetLabel: "attachments"
            });
          })
        );
      }
      showMenuAtPointer(menu, clientX, clientY, sourceMouseEvent = null) {
        if (sourceMouseEvent && typeof menu.showAtMouseEvent === "function") {
          menu.showAtMouseEvent(sourceMouseEvent);
          return;
        }
        if (typeof menu.showAtPosition === "function") {
          menu.showAtPosition({ x: clientX, y: clientY });
          return;
        }
        menu.showAtMouseEvent({
          clientX,
          clientY,
          preventDefault() {
          },
          stopPropagation() {
          }
        });
      }
      removeLinkedViewMenuItems(menu) {
        if (!menu || !Array.isArray(menu.items)) return;
        const blockedTitles = /* @__PURE__ */ new Set([
          "open linked view",
          "open local graph",
          "open backlinks",
          "open outgoing links",
          "open outline"
        ]);
        menu.items = menu.items.filter((item) => {
          const title = this.getMenuItemTitleText(item).toLowerCase();
          if (!title) return true;
          return !blockedTitles.has(title);
        });
      }
      getMenuItemTitleText(item) {
        if (!item) return "";
        if (typeof item.title === "string") return item.title.trim();
        if (item.titleEl && typeof item.titleEl.textContent === "string")
          return item.titleEl.textContent.trim();
        if (item.dom && typeof item.dom.textContent === "string") return item.dom.textContent.trim();
        return "";
      }
      async openLocalGraphForNode(nodeId) {
        const abstractFile = this.app.vault.getAbstractFileByPath(nodeId);
        if (!abstractFile || typeof abstractFile.path !== "string") return;
        if (typeof abstractFile.extension === "string" && abstractFile.extension.toLowerCase() !== "md")
          return;
        const sourceLeaf = this.app.workspace.getLeaf("tab") || this.leaf;
        await sourceLeaf.openFile(abstractFile);
        this.app.workspace.setActiveLeaf(sourceLeaf, true, true);
        const localGraphLeaf = this.app.workspace.getLeavesOfType("localgraph")[0] || this.app.workspace.getRightLeaf(true) || this.app.workspace.getLeaf("tab") || this.app.workspace.getLeaf(true);
        await localGraphLeaf.setViewState({ type: "localgraph", state: {}, active: true });
        this.app.workspace.revealLeaf(localGraphLeaf);
      }
      // Hotkey command handlers: each command resolves a target node under cursor/focus.
      async togglePinUnderCursor() {
        const node = this.getNodeUnderCursor();
        if (!node) {
          new Notice2("No node under cursor");
          return;
        }
        if (this.plugin.isPinned(node.id)) {
          this.plugin.removePin(node.id);
          this.kickLayoutSearch();
          new Notice2(`Unpinned: ${node.id}`);
          return;
        }
        await this.pinNodeExact(node.id, { x: node.x, y: node.y });
        new Notice2(`Pinned: ${node.id}`);
      }
      async promptSetMultiplierUnderCursor() {
        const node = this.getNodeUnderCursor();
        if (!node) {
          new Notice2("No node under cursor");
          return;
        }
        await this.promptSetMultiplier(node.id);
      }
      async clearMultiplierUnderCursor() {
        const node = this.getNodeUnderCursor();
        if (!node) {
          new Notice2("No node under cursor");
          return;
        }
        if (this.plugin.getNodeMultiplier(node.id) <= 1) {
          new Notice2("Multiplier is already default");
          return;
        }
        this.plugin.clearNodeMultiplier(node.id);
        this.kickLayoutSearch();
        new Notice2(`Force multiplier cleared: ${node.id}`);
      }
      getNodeUnderCursor() {
        if (!this.lastCursorScreen) return null;
        return this.getNodeAtScreen(this.lastCursorScreen.x, this.lastCursorScreen.y);
      }
      getCommandTargetNode() {
        const cursorNode = this.getNodeUnderCursor();
        if (cursorNode) return cursorNode;
        if (this.hoverNodeId && this.nodeById.has(this.hoverNodeId)) {
          return this.nodeById.get(this.hoverNodeId);
        }
        if (this.searchSelectedNodeId && this.nodeById.has(this.searchSelectedNodeId)) {
          return this.nodeById.get(this.searchSelectedNodeId);
        }
        return null;
      }
      getCommandTargetNodeOrNotice() {
        const node = this.getCommandTargetNode();
        if (node) return node;
        new Notice2("No target node under cursor");
        return null;
      }
      async commandPinNode() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        await this.pinNodeExact(node.id, { x: node.x, y: node.y });
        new Notice2(`Pinned: ${node.id}`);
      }
      async commandToggleSelectionUnderCursor() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        this.toggleNodeSelection(node.id);
      }
      async commandArmBoxSelection() {
        this.boxSelectArmed = !this.boxSelectArmed;
        new Notice2(this.boxSelectArmed ? "Box selection armed" : "Box selection disarmed");
      }
      async commandClearSelection() {
        if (this.selectedNodeIds.size <= 0) {
          new Notice2("Selection is empty");
          return;
        }
        this.clearNodeSelection();
        new Notice2("Selection cleared");
      }
      async commandExportStaticHtml(options = {}) {
        var _a, _b, _c;
        const preselectedPath = String((options == null ? void 0 : options.exportPath) || "").trim();
        const savedPath = String(((_b = (_a = this.plugin.data) == null ? void 0 : _a.settings) == null ? void 0 : _b.export_static_html_path) || "").trim();
        let exportPath = preselectedPath;
        if (!exportPath) {
          exportPath = await ExportStaticHtmlPathModal.openFor(this.app, savedPath);
          if (!exportPath) return;
        }
        if (!this.canvasEl || !this.ctx) {
          new Notice2("Graph canvas is not ready");
          return;
        }
        let nodeRequire = null;
        if (((_c = this.contentEl) == null ? void 0 : _c.win) && typeof this.contentEl.win.require === "function") {
          nodeRequire = this.contentEl.win.require.bind(this.contentEl.win);
        } else if (typeof window !== "undefined" && typeof window.require === "function") {
          nodeRequire = window.require.bind(window);
        }
        if (!nodeRequire) {
          new Notice2("Static HTML export is available only in desktop app");
          return;
        }
        let fs = null;
        let path = null;
        try {
          fs = nodeRequire("fs");
          path = nodeRequire("path");
        } catch (e) {
          new Notice2("Cannot access filesystem APIs for export");
          return;
        }
        const rawExportPath = String(exportPath || "").trim();
        if (!rawExportPath) {
          new Notice2("Export path is empty");
          return;
        }
        if (!path.isAbsolute(rawExportPath)) {
          new Notice2("Use absolute path for export");
          return;
        }
        const defaultExportFileName = "graphfrontier-static.html";
        let normalizedExportPath = rawExportPath;
        try {
          const exportPathStat = await fs.promises.stat(normalizedExportPath);
          if (exportPathStat.isDirectory()) {
            normalizedExportPath = path.join(normalizedExportPath, defaultExportFileName);
          }
        } catch (e) {
        }
        if (/[\\/]$/u.test(normalizedExportPath)) {
          normalizedExportPath = path.join(normalizedExportPath, defaultExportFileName);
        } else {
          const extension = path.extname(normalizedExportPath).toLowerCase();
          if (extension !== ".html" && extension !== ".htm") {
            const parsedPath = path.parse(normalizedExportPath);
            const fileName = parsedPath.name ? `${parsedPath.name}.html` : defaultExportFileName;
            normalizedExportPath = path.join(parsedPath.dir, fileName);
          }
        }
        if (this.plugin.data.settings.export_static_html_path !== normalizedExportPath) {
          this.plugin.data.settings.export_static_html_path = normalizedExportPath;
          this.plugin.schedulePersist();
        }
        const visibleNodeIds = this.getFilterVisibleNodeIds();
        const hasFilter = visibleNodeIds instanceof Set;
        const sourceNodes = hasFilter ? this.nodes.filter((node) => visibleNodeIds.has(node.id)) : this.nodes.slice();
        const sourceNodeIdSet = new Set(sourceNodes.map((node) => node.id));
        const sourceEdges = this.edges.filter(
          (edge) => sourceNodeIdSet.has(edge.source) && sourceNodeIdSet.has(edge.target)
        );
        const maxPreviewLines = 220;
        const maxPreviewChars = 12e3;
        const normalizePreviewText = (text) => {
          const rawText = String(text || "");
          if (!rawText) return "";
          const lines = rawText.split(/\r?\n/);
          let preview = lines.slice(0, maxPreviewLines).join("\n");
          if (preview.length > maxPreviewChars) preview = preview.slice(0, maxPreviewChars);
          if (lines.length > maxPreviewLines || rawText.length > maxPreviewChars) preview += "\n\n...";
          return preview;
        };
        const exportedNodes = await Promise.all(
          sourceNodes.map(async (node) => {
            const meta = this.nodeMetaById.get(node.id) || node.meta || null;
            const isAttachment = !!(meta == null ? void 0 : meta.isAttachment);
            const fileType = String((meta == null ? void 0 : meta.fileType) || "").trim() || (isAttachment ? "attachment" : "md");
            const nodePath = String((meta == null ? void 0 : meta.path) || node.id || "");
            const fileName = String((meta == null ? void 0 : meta.fileName) || "").trim() || String(node.label || "").trim() || nodePath;
            const properties = {};
            if ((meta == null ? void 0 : meta.properties) instanceof Map) {
              for (const [propertyKey, values] of meta.properties.entries()) {
                if (!propertyKey) continue;
                properties[propertyKey] = Array.isArray(values) ? values.map((value) => String(value || "")) : [];
              }
            }
            let contentPreview = "";
            if (!isAttachment) {
              const abstractFile = this.app.vault.getAbstractFileByPath(node.id);
              const isMarkdownFile = !!abstractFile && typeof abstractFile.extension === "string" && abstractFile.extension.toLowerCase() === "md";
              if (isMarkdownFile) {
                try {
                  const rawText = await this.app.vault.cachedRead(abstractFile);
                  contentPreview = normalizePreviewText(rawText);
                } catch (e) {
                  contentPreview = "";
                }
              }
            }
            const groupColor = this.getGroupColorForNode(node);
            const fillColor = isAttachment ? "#f2e7a0" : groupColor || "#7aa2f7";
            return {
              id: node.id,
              label: String(node.label || ""),
              labelMinimumSize: getLabelMinimumSizeRender(this, node.id),
              labelFontSize: this.plugin.getNodeLabelSize(node.id) === null ? null : this.plugin.getNodeLabelSize(node.id) / 5,
              x: Number(node.x) || 0,
              y: Number(node.y) || 0,
              degree: Number(node.degree) || 0,
              radius: Number(this.getNodeRadius(node)) || 1,
              color: fillColor,
              isAttachment,
              fileType,
              path: nodePath,
              fileName,
              tags: Array.isArray(meta == null ? void 0 : meta.tags) ? meta.tags.map((tag) => String(tag || "")) : [],
              sections: Array.isArray(meta == null ? void 0 : meta.sections) ? meta.sections.map((section) => String(section || "")) : [],
              lines: Array.isArray(meta == null ? void 0 : meta.lines) ? meta.lines.map((line) => String(line || "")) : [],
              properties,
              contentPreview
            };
          })
        );
        const exportedEdges = sourceEdges.map((edge) => ({
          source: edge.source,
          target: edge.target,
          paintedColor: this.plugin.getPaintedEdgeColor(edge.source) || this.plugin.getPaintedEdgeColor(edge.target) || null
        }));
        const width = Math.max(1, Math.floor(this.viewWidth || this.canvasEl.clientWidth || 1));
        const height = Math.max(1, Math.floor(this.viewHeight || this.canvasEl.clientHeight || 1));
        this.updateCanvasBackgroundColor();
        const theme = this.canvasTheme;
        const bgColor = theme.background;
        const textColor = theme.text;
        const mutedTextColor = theme.mutedText;
        const exportedAt = (/* @__PURE__ */ new Date()).toISOString();
        const payload = {
          exportPath: normalizedExportPath,
          exportedAt,
          camera: {
            x: Number(this.camera.x) || 0,
            y: Number(this.camera.y) || 0,
            zoom: Number(this.camera.zoom) || 1
          },
          canvas: { width, height },
          theme: { ...theme },
          settings: {
            showGrid: !!this.plugin.getSettings().show_grid,
            gridStep: this.plugin.clampGridStep(this.plugin.getSettings().grid_step),
            edgeWidth: this.plugin.clampNumber(
              this.plugin.getSettings().edge_width_scale,
              0.01,
              1,
              DEFAULT_DATA2.settings.edge_width_scale
            ),
            paintedEdgeWidth: this.plugin.clampNumber(
              this.plugin.getSettings().painted_edge_width,
              0.01,
              1,
              DEFAULT_DATA2.settings.painted_edge_width
            ),
            labelMinZoom: this.getLabelZoomThreshold(),
            labelFontSize: this.getLabelFontSize(),
            zoomStepFactor: ZOOM_STEP_FACTOR2,
            minZoom: MIN_ZOOM2,
            maxZoom: MAX_ZOOM2
          },
          nodes: exportedNodes,
          edges: exportedEdges
        };
        const payloadJson = JSON.stringify(payload).replace(/</g, "\\u003c").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
        const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>GraphFrontier Static Interactive Export</title>
  <style>
    :root {
      color-scheme: ${theme.colorScheme};
    }
    html {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    body {
      margin: 0;
      width: 100%;
      height: 100%;
      min-height: 100vh;
      background: ${bgColor};
      color: ${textColor};
      font: 12px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif;
      overflow: hidden;
    }
    .app {
      position: fixed;
      inset: 0;
      display: grid;
      grid-template-columns: 1fr 430px;
      overflow: hidden;
      min-height: 0;
    }
    .graph-wrap {
      position: relative;
      overflow: hidden;
      min-height: 0;
    }
    #graph {
      display: block;
      width: 100%;
      height: 100%;
      background: ${bgColor};
      cursor: grab;
    }
    #graph.is-dragging {
      cursor: grabbing;
    }
    .hud {
      position: absolute;
      top: 10px;
      left: 10px;
      background: ${theme.surface};
      border: 1px solid ${theme.border};
      border-radius: 8px;
      padding: 6px 8px;
      color: ${mutedTextColor};
      backdrop-filter: blur(2px);
      pointer-events: none;
    }
    .panel {
      background: ${theme.surface};
      border-left: 1px solid ${theme.border};
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    }
    .panel-header {
      padding: 12px;
      border-bottom: 1px solid ${theme.border};
    }
    .panel-title {
      font-size: 13px;
      font-weight: 600;
      margin-bottom: 4px;
      word-break: break-word;
    }
    .panel-meta {
      color: ${mutedTextColor};
      word-break: break-word;
    }
    .panel-body {
      padding: 12px;
      min-height: 0;
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      overflow: hidden;
      gap: 10px;
    }
    .hint {
      color: ${mutedTextColor};
    }
    .content-html {
      padding: 10px 0 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      flex: 1 1 0;
      height: 100%;
      overflow: auto;
      min-height: 0;
      line-height: 1.45;
      word-break: break-word;
      overflow-wrap: anywhere;
    }
    .content-html :is(h1, h2, h3, h4, h5, h6) {
      margin: 0.2em 0 0.45em;
    }
    .content-html p {
      margin: 0.35em 0;
    }
    .content-html pre {
      margin: 0.4em 0;
      padding: 8px;
      border-radius: 6px;
      background: ${bgColor};
      max-width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: pre-wrap;
      word-break: break-word;
    }
    @media (max-width: 1000px) {
      .app {
        grid-template-columns: 1fr;
      }
      .panel {
        position: absolute;
        right: 8px;
        top: 8px;
        bottom: 8px;
        width: min(94vw, 430px);
        border-radius: 10px;
        border: 1px solid ${theme.border};
      }
    }
  </style>
</head>
<body>
  <div class="app">
    <section class="graph-wrap">
      <canvas id="graph"></canvas>
      <div class="hud" id="hud"></div>
    </section>
    <aside class="panel">
      <header class="panel-header">
        <div class="panel-title" id="panel-title">No node selected</div>
        <div class="panel-meta" id="panel-meta">Click a node to see file content preview</div>
      </header>
      <div class="panel-body">
        <div class="hint">Drag to pan, wheel to zoom, hover for labels.</div>
        <div class="content-html" id="panel-content-html">Select a node\u2026</div>
      </div>
    </aside>
  </div>
  <script>
    const EXPORT_DATA = ${payloadJson};
    (() => {
      const getLabelAppearance = ${getLabelAppearance.toString()};
      const canvas = document.getElementById('graph');
      const hud = document.getElementById('hud');
      const panelTitle = document.getElementById('panel-title');
      const panelMeta = document.getElementById('panel-meta');
      const panelContentHtml = document.getElementById('panel-content-html');
      const ctx = canvas.getContext('2d');
      const nodeById = new Map(EXPORT_DATA.nodes.map((node) => [node.id, node]));
      const neighborsById = new Map(EXPORT_DATA.nodes.map((node) => [node.id, new Set()]));
      for (const edge of EXPORT_DATA.edges) {
        neighborsById.get(edge.source)?.add(edge.target);
        neighborsById.get(edge.target)?.add(edge.source);
      }

      const camera = {
        x: Number(EXPORT_DATA.camera?.x) || 0,
        y: Number(EXPORT_DATA.camera?.y) || 0,
        zoom: Number(EXPORT_DATA.camera?.zoom) || 1,
      };
      const edgeWidth = Number(EXPORT_DATA.settings?.edgeWidth) || 0.34;
      const paintedEdgeWidth = Number(EXPORT_DATA.settings?.paintedEdgeWidth) || 0.2;
      const labelMinZoom = Number(EXPORT_DATA.settings?.labelMinZoom) || 0.4;
      const labelFontSize = Number(EXPORT_DATA.settings?.labelFontSize) || 1.8;
      const showGrid = !!EXPORT_DATA.settings?.showGrid;
      const gridStep = Number(EXPORT_DATA.settings?.gridStep) || 20;
      const minZoom = Number(EXPORT_DATA.settings?.minZoom) || 0.1;
      const maxZoom = Number(EXPORT_DATA.settings?.maxZoom) || 12;
      const zoomStepFactor = Number(EXPORT_DATA.settings?.zoomStepFactor) || 1.12;

      let dpr = 1;
      let viewWidth = 1;
      let viewHeight = 1;
      let hoveredNodeId = null;
      let selectedNodeId = null;
      let panDrag = null;

      const worldToScreen = (x, y) => ({
        x: (x - camera.x) * camera.zoom + viewWidth / 2,
        y: (y - camera.y) * camera.zoom + viewHeight / 2,
      });
      const screenToWorld = (x, y) => ({
        x: (x - viewWidth / 2) / camera.zoom + camera.x,
        y: (y - viewHeight / 2) / camera.zoom + camera.y,
      });
      const clampZoom = (value) => Math.min(maxZoom, Math.max(minZoom, value));

      function getCanvasPoint(event) {
        const rect = canvas.getBoundingClientRect();
        return {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          inside:
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom,
        };
      }

      function getNodeAtScreen(screenX, screenY) {
        const world = screenToWorld(screenX, screenY);
        let bestNode = null;
        let bestDist2 = Infinity;
        for (const node of EXPORT_DATA.nodes) {
          const dx = node.x - world.x;
          const dy = node.y - world.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < bestDist2) {
            bestDist2 = d2;
            bestNode = node;
          }
        }
        if (!bestNode) return null;
        const maxDist = Math.max(1, Number(bestNode.radius || 1) + 2 / Math.max(camera.zoom, 0.0001));
        if (bestDist2 > maxDist * maxDist) return null;
        return bestNode;
      }

      function drawGrid() {
        if (!showGrid) return;
        const scaledStep = gridStep * camera.zoom;
        if (scaledStep < 8) return;
        const leftWorld = screenToWorld(0, 0).x;
        const rightWorld = screenToWorld(viewWidth, 0).x;
        const topWorld = screenToWorld(0, 0).y;
        const bottomWorld = screenToWorld(0, viewHeight).y;
        const startX = Math.floor(leftWorld / gridStep) * gridStep;
        const endX = Math.ceil(rightWorld / gridStep) * gridStep;
        const startY = Math.floor(topWorld / gridStep) * gridStep;
        const endY = Math.ceil(bottomWorld / gridStep) * gridStep;

        ctx.save();
        ctx.globalAlpha = EXPORT_DATA.theme.gridOpacity;
        ctx.strokeStyle = EXPORT_DATA.theme.grid;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = startX; x <= endX; x += gridStep) {
          const sx = Math.round(worldToScreen(x, 0).x) + 0.5;
          ctx.moveTo(sx, 0);
          ctx.lineTo(sx, viewHeight);
        }
        for (let y = startY; y <= endY; y += gridStep) {
          const sy = Math.round(worldToScreen(0, y).y) + 0.5;
          ctx.moveTo(0, sy);
          ctx.lineTo(viewWidth, sy);
        }
        ctx.stroke();
        ctx.restore();
      }

      function drawEdges() {
        const selectedNeighbors = selectedNodeId ? neighborsById.get(selectedNodeId) || new Set() : null;
        for (const edge of EXPORT_DATA.edges) {
          const sourceNode = nodeById.get(edge.source);
          const targetNode = nodeById.get(edge.target);
          if (!sourceNode || !targetNode) continue;
          const sourcePoint = worldToScreen(sourceNode.x, sourceNode.y);
          const targetPoint = worldToScreen(targetNode.x, targetNode.y);
          const isActive = !!selectedNodeId && (edge.source === selectedNodeId || edge.target === selectedNodeId);

          ctx.save();
          ctx.globalAlpha = selectedNodeId ? (isActive ? 1 : 0.24) : 1;
          ctx.strokeStyle = edge.paintedColor || 'rgba(145,160,187,0.7)';
          ctx.lineWidth = edge.paintedColor ? paintedEdgeWidth : edgeWidth;
          ctx.beginPath();
          ctx.moveTo(sourcePoint.x, sourcePoint.y);
          ctx.lineTo(targetPoint.x, targetPoint.y);
          ctx.stroke();
          ctx.restore();
        }
      }

      function drawNodes() {
        const selectedNeighbors = selectedNodeId ? neighborsById.get(selectedNodeId) || new Set() : new Set();
        for (const node of EXPORT_DATA.nodes) {
          const point = worldToScreen(node.x, node.y);
          if (point.x < -80 || point.x > viewWidth + 80 || point.y < -80 || point.y > viewHeight + 80) continue;
          const radius = Math.max(0.6, Number(node.radius || 1) * camera.zoom);
          const isHovered = hoveredNodeId === node.id;
          const isSelected = selectedNodeId === node.id;
          const isNeighbor = selectedNodeId && selectedNeighbors.has(node.id);
          const alpha = selectedNodeId ? (isSelected || isNeighbor ? 1 : 0.32) : 1;

          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = node.color || '#7aa2f7';
          ctx.beginPath();
          ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          if (isHovered || isSelected) {
            ctx.save();
            ctx.globalAlpha = 1;
            ctx.strokeStyle = EXPORT_DATA.theme.selection;
            ctx.lineWidth = isSelected ? 1.8 : 1.3;
            ctx.beginPath();
            ctx.arc(point.x, point.y, radius + 2, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }

          const label = getLabelAppearance(camera.zoom, labelMinZoom, node.labelFontSize ?? labelFontSize, alpha, isHovered || isSelected, node.labelMinimumSize ?? 10);
          if (label.alpha > 0) {
            ctx.save();
            ctx.globalAlpha = label.alpha;
            ctx.fillStyle = EXPORT_DATA.theme.text;
            ctx.font = label.fontSize + 'px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillText(String(node.label || ''), point.x, point.y - radius - 4);
            ctx.restore();
          }
        }
      }

      function drawHoverTooltip() {
        if (!hoveredNodeId) return;
        const node = nodeById.get(hoveredNodeId);
        if (!node) return;
        const point = worldToScreen(node.x, node.y);
        const label = String(node.label || '');
        if (!label) return;
        const type = String(node.fileType || '').trim();
        const text = type ? label + ' (' + type + ')' : label;

        ctx.save();
        ctx.font = '13px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
        const textWidth = ctx.measureText(text).width;
        const padX = 7;
        const padY = 4;
        const boxWidth = textWidth + padX * 2;
        const boxHeight = 13 + padY * 2;
        const radius = Math.min(8, boxHeight / 2);
        const boxX = Math.max(6, Math.min(viewWidth - boxWidth - 6, point.x - boxWidth / 2));
        const boxY = Math.max(6, point.y - boxHeight - 10);

        ctx.globalAlpha = 1;
        ctx.fillStyle = EXPORT_DATA.theme.surface;
        ctx.beginPath();
        ctx.moveTo(boxX + radius, boxY);
        ctx.lineTo(boxX + boxWidth - radius, boxY);
        ctx.arcTo(boxX + boxWidth, boxY, boxX + boxWidth, boxY + radius, radius);
        ctx.lineTo(boxX + boxWidth, boxY + boxHeight - radius);
        ctx.arcTo(boxX + boxWidth, boxY + boxHeight, boxX + boxWidth - radius, boxY + boxHeight, radius);
        ctx.lineTo(boxX + radius, boxY + boxHeight);
        ctx.arcTo(boxX, boxY + boxHeight, boxX, boxY + boxHeight - radius, radius);
        ctx.lineTo(boxX, boxY + radius);
        ctx.arcTo(boxX, boxY, boxX + radius, boxY, radius);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = EXPORT_DATA.theme.text;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(text, boxX + padX, boxY + padY);
        ctx.restore();
      }

      function escapeHtml(text) {
        return String(text || '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

      function renderInlineMarkdown(text) {
        const safeText = escapeHtml(text);
        if (!safeText) return '';
        const tick = String.fromCharCode(96);
        const chunks = safeText.split(tick);
        if (chunks.length <= 1) return safeText;
        let html = '';
        for (let index = 0; index < chunks.length; index += 1) {
          const chunk = chunks[index];
          html += index % 2 === 1 ? '<code>' + chunk + '</code>' : chunk;
        }
        return html;
      }

      function startsWithOrderedListItem(text) {
        const dotIndex = text.indexOf('. ');
        if (dotIndex <= 0) return false;
        for (let index = 0; index < dotIndex; index += 1) {
          const code = text.charCodeAt(index);
          if (code < 48 || code > 57) return false;
        }
        return true;
      }

      function isHorizontalRule(text) {
        if (text.length < 3) return false;
        const firstChar = text.charAt(0);
        if (firstChar !== '-' && firstChar !== '*') return false;
        for (let index = 1; index < text.length; index += 1) {
          if (text.charAt(index) !== firstChar) return false;
        }
        return true;
      }

      function renderSimpleMarkdown(markdownText) {
        const text = String(markdownText || '').split(String.fromCharCode(13)).join('');
        if (!text.trim()) return '';
        const lines = text.split(String.fromCharCode(10));
        const codeFence = String.fromCharCode(96).repeat(3);
        const out = [];
        let inCode = false;
        let codeLang = '';
        let inUl = false;
        let inOl = false;
        let paragraph = [];

        const flushParagraph = () => {
          if (paragraph.length <= 0) return;
          out.push('<p>' + paragraph.map((line) => renderInlineMarkdown(line)).join('<br>') + '</p>');
          paragraph = [];
        };
        const closeLists = () => {
          if (inUl) {
            out.push('</ul>');
            inUl = false;
          }
          if (inOl) {
            out.push('</ol>');
            inOl = false;
          }
        };

        for (const rawLine of lines) {
          const line = String(rawLine || '');
          const trimmed = line.trim();

          if (trimmed.startsWith(codeFence)) {
            flushParagraph();
            closeLists();
            if (!inCode) {
              codeLang = trimmed.slice(3).trim();
              out.push('<pre><code' + (codeLang ? ' class="language-' + escapeHtml(codeLang) + '"' : '') + '>');
              inCode = true;
            } else {
              out.push('</code></pre>');
              inCode = false;
              codeLang = '';
            }
            continue;
          }
          if (inCode) {
            out.push(escapeHtml(line));
            continue;
          }

          if (!trimmed) {
            flushParagraph();
            closeLists();
            continue;
          }

          let headingLevel = 0;
          while (headingLevel < 6 && trimmed.charAt(headingLevel) === '#') headingLevel += 1;
          if (headingLevel > 0 && trimmed.charAt(headingLevel) === ' ') {
            flushParagraph();
            closeLists();
            const headingText = trimmed.slice(headingLevel + 1);
            out.push(
              '<h' +
                headingLevel +
                '>' +
                renderInlineMarkdown(headingText) +
                '</h' +
                headingLevel +
                '>'
            );
            continue;
          }

          if (trimmed.startsWith('>')) {
            flushParagraph();
            closeLists();
            const quoteText = trimmed.startsWith('> ') ? trimmed.slice(2) : trimmed.slice(1);
            out.push('<blockquote><p>' + renderInlineMarkdown(quoteText) + '</p></blockquote>');
            continue;
          }

          const isUnorderedList =
            trimmed.length > 2 &&
            (trimmed.charAt(0) === '-' || trimmed.charAt(0) === '*' || trimmed.charAt(0) === '+') &&
            trimmed.charAt(1) === ' ';
          if (isUnorderedList) {
            flushParagraph();
            if (inOl) {
              out.push('</ol>');
              inOl = false;
            }
            if (!inUl) {
              out.push('<ul>');
              inUl = true;
            }
            out.push('<li>' + renderInlineMarkdown(trimmed.slice(2)) + '</li>');
            continue;
          }

          if (startsWithOrderedListItem(trimmed)) {
            flushParagraph();
            if (inUl) {
              out.push('</ul>');
              inUl = false;
            }
            if (!inOl) {
              out.push('<ol>');
              inOl = true;
            }
            const itemText = trimmed.slice(trimmed.indexOf('. ') + 2);
            out.push('<li>' + renderInlineMarkdown(itemText) + '</li>');
            continue;
          }

          if (isHorizontalRule(trimmed)) {
            flushParagraph();
            closeLists();
            out.push('<hr>');
            continue;
          }

          closeLists();
          paragraph.push(line);
        }

        flushParagraph();
        closeLists();
        if (inCode) out.push('</code></pre>');
        return out.join('');
      }

      function updatePanel(nodeId) {
        if (!nodeId) {
          panelTitle.textContent = 'No node selected';
          panelMeta.textContent = 'Click a node to see file content preview';
          panelContentHtml.textContent = 'Select a node\u2026';
          return;
        }
        const node = nodeById.get(nodeId);
        if (!node) return;
        panelTitle.textContent = node.label || node.fileName || node.path || node.id;
        const tagsText = node.tags && node.tags.length ? ' \xB7 #' + node.tags.join(' #') : '';
        panelMeta.textContent = (node.path || node.id) + ' \xB7 ' + (node.fileType || 'file') + tagsText;
        if (node.contentPreview) {
          const rendered = renderSimpleMarkdown(node.contentPreview);
          panelContentHtml.innerHTML = rendered || '<p>No readable content</p>';
        } else if (node.isAttachment) {
          panelContentHtml.innerHTML = '<p>Attachment node (no markdown content)</p>';
        } else {
          panelContentHtml.innerHTML = '<p>No readable content</p>';
        }
      }

      function draw() {
        ctx.clearRect(0, 0, viewWidth, viewHeight);
        ctx.fillStyle = EXPORT_DATA.theme.background || '#111418';
        ctx.fillRect(0, 0, viewWidth, viewHeight);
        drawGrid();
        drawEdges();
        drawNodes();
        drawHoverTooltip();
        const selectedText = selectedNodeId
          ? nodeById.get(selectedNodeId)?.label || selectedNodeId
          : 'none';
        hud.textContent =
          'GraphFrontier static export \xB7 ' +
          EXPORT_DATA.exportedAt +
          ' \xB7 nodes ' +
          EXPORT_DATA.nodes.length +
          ' \xB7 edges ' +
          EXPORT_DATA.edges.length +
          '\\nSelected: ' +
          selectedText +
          ' \xB7 zoom ' +
          camera.zoom.toFixed(2);
      }

      function resize() {
        const rect = canvas.getBoundingClientRect();
        dpr = window.devicePixelRatio || 1;
        viewWidth = Math.max(1, Math.floor(rect.width));
        viewHeight = Math.max(1, Math.floor(rect.height));
        canvas.width = Math.max(1, Math.floor(rect.width * dpr));
        canvas.height = Math.max(1, Math.floor(rect.height * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        draw();
      }

      canvas.addEventListener('mousedown', (event) => {
        if (event.button !== 0) return;
        const point = getCanvasPoint(event);
        panDrag = {
          startClientX: event.clientX,
          startClientY: event.clientY,
          startCameraX: camera.x,
          startCameraY: camera.y,
          startZoom: camera.zoom,
          moved: 0,
          startedInside: point.inside,
        };
        canvas.classList.add('is-dragging');
      });

      window.addEventListener('mousemove', (event) => {
        const point = getCanvasPoint(event);
        if (!panDrag) {
          const nextHover = point.inside ? getNodeAtScreen(point.x, point.y)?.id || null : null;
          if (nextHover !== hoveredNodeId) {
            hoveredNodeId = nextHover;
            draw();
          }
          return;
        }
        const dx = event.clientX - panDrag.startClientX;
        const dy = event.clientY - panDrag.startClientY;
        panDrag.moved = Math.max(panDrag.moved, Math.sqrt(dx * dx + dy * dy));
        camera.x = panDrag.startCameraX - dx / panDrag.startZoom;
        camera.y = panDrag.startCameraY - dy / panDrag.startZoom;
        hoveredNodeId = point.inside ? getNodeAtScreen(point.x, point.y)?.id || null : null;
        draw();
      });

      window.addEventListener('mouseup', (event) => {
        if (!panDrag) return;
        const point = getCanvasPoint(event);
        const isClick = panDrag.moved <= 3;
        const startedInside = panDrag.startedInside;
        panDrag = null;
        canvas.classList.remove('is-dragging');
        if (isClick && startedInside && point.inside) {
          const clickedNode = getNodeAtScreen(point.x, point.y);
          selectedNodeId = clickedNode ? clickedNode.id : null;
          updatePanel(selectedNodeId);
        }
        draw();
      });

      canvas.addEventListener(
        'wheel',
        (event) => {
          event.preventDefault();
          const point = getCanvasPoint(event);
          if (!point.inside) return;
          const before = screenToWorld(point.x, point.y);
          const factor = event.deltaY < 0 ? zoomStepFactor : 1 / zoomStepFactor;
          camera.zoom = clampZoom(camera.zoom * factor);
          const after = screenToWorld(point.x, point.y);
          camera.x += before.x - after.x;
          camera.y += before.y - after.y;
          hoveredNodeId = getNodeAtScreen(point.x, point.y)?.id || null;
          draw();
        },
        { passive: false }
      );

      window.addEventListener('resize', resize);
      updatePanel(null);
      resize();
    })();
  <\/script>
</body>
</html>
`;
        try {
          await fs.promises.mkdir(path.dirname(normalizedExportPath), { recursive: true });
          await fs.promises.writeFile(normalizedExportPath, html, "utf8");
          new Notice2(
            `Static HTML exported: ${normalizedExportPath} (${exportedNodes.length} nodes, ${exportedEdges.length} edges)`
          );
        } catch (e) {
          new Notice2("Failed to write static HTML export");
        }
      }
      async commandPinToGrid() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        await this.pinNodeToGrid(node.id, { x: node.x, y: node.y });
        new Notice2(`Pinned to grid: ${node.id}`);
      }
      async commandUnpinNode() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        this.plugin.removePin(node.id);
        this.plugin.removeOrbitPin(node.id);
        this.kickLayoutSearch();
        new Notice2(`Unpinned: ${node.id}`);
      }
      async commandPinLinkedToOrbit() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        await this.pinLinkedNodesToOrbit(node.id);
      }
      async commandUnpinLinkedNodes() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        await this.unpinLinkedNodes(node.id);
      }
      async commandAddToSearch() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        this.applySearchSelectionFromNode(node, { forceSource: "name" });
        if (this.searchMode === "filter") this.kickLayoutSearch();
      }
      async commandShowLocalGraph() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        await this.openLocalGraphForNode(node.id);
      }
      async commandPinLinkedNodes() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        await this.pinLinkedNodes(node.id);
      }
      async commandPinLinkedNodesToGrid() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        await this.pinLinkedNodesToGrid(node.id);
      }
      async commandPaintEdges() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        await this.promptPickPaintedEdgeColor(node.id);
      }
      async commandClearPaintedEdges() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        if (!this.plugin.getPaintedEdgeColor(node.id)) {
          new Notice2("No painted edges on node");
          return;
        }
        this.plugin.clearPaintedEdgeColor(node.id);
        this.plugin.renderAllViews();
        new Notice2(`Painted edges cleared: ${node.id}`);
      }
      async commandStrongPull() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        const strong = this.plugin.clampStrongPullMultiplier(
          this.plugin.getSettings().strong_pull_multiplier
        );
        this.plugin.setNodeMultiplier(node.id, strong, { mode: "strong-pull" });
        this.kickLayoutSearch();
        new Notice2(`Strong pull: ${node.id} x${strong.toFixed(2)}`);
      }
      async commandClearStrongPull() {
        const node = this.getCommandTargetNodeOrNotice();
        if (!node) return;
        if (this.plugin.getNodeMultiplier(node.id) <= 1 && !this.plugin.isStrongPullNode(node.id)) {
          new Notice2("Strong pull is already cleared");
          return;
        }
        this.plugin.clearNodeMultiplier(node.id);
        this.kickLayoutSearch();
        new Notice2(`Strong pull cleared: ${node.id}`);
      }
      async commandPinAllNodes() {
        if (this.nodes.length <= 0) {
          new Notice2("No nodes");
          return;
        }
        let pinnedCount = 0;
        for (const node of this.nodes) {
          this.plugin.setPin(node.id, { x: node.x, y: node.y }, { mode: "exact" });
          node.vx = 0;
          node.vy = 0;
          pinnedCount += 1;
        }
        this.markNodeSpatialIndexDirty();
        this.kickLayoutSearch();
        this.plugin.renderAllViews();
        new Notice2(`Pinned all nodes: ${pinnedCount}`);
      }
      async commandUnpinAllNodes() {
        const pinCount = Object.keys(this.plugin.data.pins || {}).length;
        const orbitPinCount = Object.keys(this.plugin.data.orbit_pins || {}).length;
        if (pinCount <= 0 && orbitPinCount <= 0) {
          new Notice2("No pinned nodes");
          return;
        }
        this.plugin.data.pins = {};
        this.plugin.data.orbit_pins = {};
        this.plugin.schedulePersist();
        this.kickLayoutSearch();
        this.plugin.renderAllViews();
        new Notice2(`Unpinned all nodes: ${pinCount + orbitPinCount}`);
      }
      // Prompt-based node tools used by context menu and hotkeys.
      async promptSetCoordinates(nodeId) {
        const node = this.nodeById.get(nodeId);
        if (!node) return;
        const coords = await ExactCoordinatesModal.openFor(this.app, node.x, node.y);
        if (!coords) return;
        const x = coords.x;
        const y = coords.y;
        const nextPos = { x, y };
        this.plugin.setPin(nodeId, nextPos, { mode: "exact" });
        const currentNode = this.nodeById.get(nodeId);
        if (currentNode) {
          currentNode.x = nextPos.x;
          currentNode.y = nextPos.y;
          currentNode.vx = 0;
          currentNode.vy = 0;
        }
        this.markNodeSpatialIndexDirty();
        this.kickLayoutSearch();
        this.plugin.renderAllViews();
        new Notice2(`Pinned to coordinates: ${nodeId} (${x.toFixed(2)}, ${y.toFixed(2)})`);
      }
      async promptSetMultiplier(nodeId) {
        const current = this.plugin.getNodeMultiplier(nodeId);
        const raw = this.contentEl.win.prompt(
          `Set force multiplier for node (${NODE_MULTIPLIER_MIN2}..${NODE_MULTIPLIER_MAX2})`,
          String(current)
        );
        if (raw == null) return;
        const value = Number(String(raw).trim());
        if (!Number.isFinite(value)) {
          new Notice2("Invalid number");
          return;
        }
        const clamped = this.plugin.clampMultiplier(value);
        this.plugin.setNodeMultiplier(nodeId, clamped, { mode: "manual" });
        this.kickLayoutSearch();
        if (clamped <= 1) {
          new Notice2(`Multiplier cleared: ${nodeId}`);
        } else {
          new Notice2(`Multiplier set: ${nodeId} x${clamped.toFixed(2)}`);
        }
      }
      async promptPickPaintedEdgeColor(nodeId, clientX = null, clientY = null) {
        const initialColor = this.plugin.getPaintedEdgeColor(nodeId) || "#ef6f6c";
        const hostDocument = this.contentEl.ownerDocument || document;
        const colorInput = hostDocument.createElement("input");
        colorInput.type = "color";
        colorInput.value = initialColor;
        colorInput.className = "graphfrontier-group-color-input";
        hostDocument.body.appendChild(colorInput);
        const viewportWidth = this.contentEl.win.innerWidth || 1200;
        const viewportHeight = this.contentEl.win.innerHeight || 800;
        const pickerSize = 24;
        const targetX = Number.isFinite(clientX) ? Number(clientX) : Math.floor(viewportWidth / 2);
        const targetY = Number.isFinite(clientY) ? Number(clientY) : Math.floor(viewportHeight / 2);
        const clampedX = Math.max(8, Math.min(viewportWidth - pickerSize - 8, targetX));
        const clampedY = Math.max(8, Math.min(viewportHeight - pickerSize - 8, targetY));
        colorInput.style.position = "fixed";
        colorInput.style.left = `${clampedX}px`;
        colorInput.style.top = `${clampedY}px`;
        colorInput.style.opacity = "0";
        colorInput.style.zIndex = "9999";
        colorInput.style.pointerEvents = "none";
        const cleanup = () => {
          colorInput.remove();
        };
        const applySelectedColor = () => {
          this.plugin.setPaintedEdgeColor(nodeId, colorInput.value);
          this.plugin.renderAllViews();
        };
        this.registerDomEvent(colorInput, "input", () => {
          applySelectedColor();
        });
        this.registerDomEvent(colorInput, "change", () => {
          applySelectedColor();
        });
        this.registerDomEvent(colorInput, "blur", () => {
          window.setTimeout(cleanup, 40);
        });
        colorInput.focus();
        colorInput.click();
      }
      // Pin placement primitives for exact/grid modes and bulk pin alignment.
      async pinNodeToGrid(nodeId, position) {
        const next = this.snapPositionToGrid(nodeId, position.x, position.y);
        this.plugin.setPin(nodeId, next, { mode: "grid" });
        const node = this.nodeById.get(nodeId);
        if (node) {
          node.x = next.x;
          node.y = next.y;
          node.vx = 0;
          node.vy = 0;
        }
        this.markNodeSpatialIndexDirty();
        this.kickLayoutSearch();
      }
      async pinNodeExact(nodeId, position) {
        const next = { x: position.x, y: position.y };
        this.plugin.setPin(nodeId, next, { mode: "exact" });
        const node = this.nodeById.get(nodeId);
        if (node) {
          node.x = next.x;
          node.y = next.y;
          node.vx = 0;
          node.vy = 0;
        }
        this.markNodeSpatialIndexDirty();
        this.kickLayoutSearch();
      }
      async alignPinsToGrid() {
        const step = this.plugin.clampGridStep(this.plugin.getSettings().grid_step);
        const sortedPins = Object.entries(this.plugin.data.pins).sort(
          (entryA, entryB) => entryA[0].localeCompare(entryB[0])
        );
        const occupied = /* @__PURE__ */ new Set();
        let moved = 0;
        for (const [nodeId, pos] of sortedPins) {
          if (!pos || typeof pos !== "object") continue;
          const snapped = this.findNearestFreeGridCell(pos.x, pos.y, step, occupied);
          occupied.add(this.gridKey(snapped.gx, snapped.gy));
          if (snapped.x !== pos.x || snapped.y !== pos.y) moved++;
          const pinMode = this.plugin.getPinMode(nodeId);
          this.plugin.data.pins[nodeId] = { x: snapped.x, y: snapped.y, mode: pinMode };
          const node = this.nodeById.get(nodeId);
          if (node) {
            node.x = snapped.x;
            node.y = snapped.y;
            node.vx = 0;
            node.vy = 0;
          }
        }
        this.markNodeSpatialIndexDirty();
        this.plugin.schedulePersist();
        new Notice2(
          moved > 0 ? `Aligned pinned nodes to grid: moved ${moved}` : `Pinned nodes already aligned (step ${step})`
        );
      }
      // Linked-node bulk actions: pin, unpin, and pin-to-grid for neighbor nodes.
      getLinkedTargetOptions(options = {}) {
        const targetKind = ["attachment", "regular"].includes(options.targetKind) ? options.targetKind : "all";
        const targetLabel = typeof options.targetLabel === "string" && options.targetLabel.trim() ? options.targetLabel.trim() : targetKind === "attachment" ? "attachments" : "linked nodes";
        const noPinsLabel = typeof options.noPinsLabel === "string" && options.noPinsLabel.trim() ? options.noPinsLabel.trim() : targetKind === "attachment" ? "attachment pins" : "linked pins";
        return { targetKind, targetLabel, noPinsLabel };
      }
      async pinLinkedNodes(nodeId, options = {}) {
        const { targetKind, targetLabel } = this.getLinkedTargetOptions(options);
        const linkedNodeIds = this.getLinkedNodeIdsByKind(nodeId, targetKind);
        if (linkedNodeIds.length === 0) {
          new Notice2(`No ${targetLabel}`);
          return;
        }
        let pinnedCount = 0;
        for (const linkedNodeId of linkedNodeIds) {
          const linkedNode = this.nodeById.get(linkedNodeId);
          if (!linkedNode) continue;
          this.plugin.setPin(linkedNodeId, { x: linkedNode.x, y: linkedNode.y }, { mode: "exact" });
          linkedNode.vx = 0;
          linkedNode.vy = 0;
          pinnedCount += 1;
        }
        if (pinnedCount <= 0) {
          new Notice2(`No ${targetLabel}`);
          return;
        }
        this.markNodeSpatialIndexDirty();
        this.kickLayoutSearch();
        this.plugin.renderAllViews();
        new Notice2(`Pinned ${targetLabel}: ${pinnedCount}`);
      }
      async pinLinkedNodesToGrid(nodeId, options = {}) {
        const { targetKind, targetLabel } = this.getLinkedTargetOptions(options);
        const linkedNodeIds = this.getLinkedNodeIdsByKind(nodeId, targetKind);
        if (linkedNodeIds.length === 0) {
          new Notice2(`No ${targetLabel}`);
          return;
        }
        const gridStep = this.plugin.clampGridStep(this.plugin.getSettings().grid_step);
        const occupiedGridCells = this.getOccupiedGridCells();
        let pinnedCount = 0;
        for (const linkedNodeId of linkedNodeIds) {
          const linkedNode = this.nodeById.get(linkedNodeId);
          if (!linkedNode) continue;
          const snappedCell = this.findNearestFreeGridCell(
            linkedNode.x,
            linkedNode.y,
            gridStep,
            occupiedGridCells
          );
          occupiedGridCells.add(this.gridKey(snappedCell.gx, snappedCell.gy));
          this.plugin.setPin(linkedNodeId, { x: snappedCell.x, y: snappedCell.y }, { mode: "grid" });
          linkedNode.x = snappedCell.x;
          linkedNode.y = snappedCell.y;
          linkedNode.vx = 0;
          linkedNode.vy = 0;
          pinnedCount += 1;
        }
        if (pinnedCount <= 0) {
          new Notice2(`No ${targetLabel}`);
          return;
        }
        this.markNodeSpatialIndexDirty();
        this.kickLayoutSearch();
        this.plugin.renderAllViews();
        new Notice2(`Pinned ${targetLabel} to grid: ${pinnedCount}`);
      }
      async unpinLinkedNodes(nodeId, options = {}) {
        const { targetKind, targetLabel, noPinsLabel } = this.getLinkedTargetOptions(options);
        const linkedNodeIds = this.getLinkedNodeIdsByKind(nodeId, targetKind);
        if (linkedNodeIds.length === 0) {
          new Notice2(`No ${targetLabel}`);
          return;
        }
        let unpinnedCount = 0;
        for (const linkedNodeId of linkedNodeIds) {
          let removedAnyMode = false;
          if (this.plugin.isPinned(linkedNodeId)) {
            this.plugin.removePin(linkedNodeId);
            removedAnyMode = true;
          }
          if (this.plugin.isOrbitPinned(linkedNodeId)) {
            this.plugin.removeOrbitPin(linkedNodeId);
            removedAnyMode = true;
          }
          if (removedAnyMode) unpinnedCount += 1;
        }
        if (unpinnedCount <= 0) {
          new Notice2(`No ${noPinsLabel}`);
          return;
        }
        this.kickLayoutSearch();
        this.plugin.renderAllViews();
        new Notice2(`Unpinned ${targetLabel}: ${unpinnedCount}`);
      }
      // Orbit geometry and auto-orbit rules for linked nodes and attachments.
      getOrbitRadiusBySpacing(orbitNodeCount, minRadius) {
        return getOrbitRadiusBySpacing(this.plugin, orbitNodeCount, minRadius);
      }
      getOrbitRadiusForAnchor(orbitNodeCount) {
        return getOrbitRadiusForAnchor(this.plugin, orbitNodeCount);
      }
      buildAttachmentAutoOrbitMap() {
        if (this.plugin.data.settings.attachments_on_orbits === false) return /* @__PURE__ */ new Map();
        return buildAttachmentAutoOrbitMapPhysics(this);
      }
      recomputeOrbitRadii() {
        return recomputeOrbitRadiiPhysics(this);
      }
      async pinLinkedNodesToOrbit(nodeId, options = {}) {
        const anchorNode = this.nodeById.get(nodeId);
        if (!anchorNode) return;
        const { targetKind, targetLabel } = this.getLinkedTargetOptions(options);
        const linkedNodeIds = this.getLinkedNodeIdsByKind(nodeId, targetKind);
        if (linkedNodeIds.length === 0) {
          new Notice2(`No ${targetLabel}`);
          return;
        }
        const sortedLinkedNodeIds = linkedNodeIds.slice().sort((leftId, rightId) => leftId.localeCompare(rightId));
        const orbitRadius = this.getOrbitRadiusForAnchor(sortedLinkedNodeIds.length);
        let orbitPinnedCount = 0;
        for (let index = 0; index < sortedLinkedNodeIds.length; index++) {
          const linkedNodeId = sortedLinkedNodeIds[index];
          const linkedNode = this.nodeById.get(linkedNodeId);
          if (!linkedNode) continue;
          const angle = Math.PI * 2 * index / sortedLinkedNodeIds.length;
          this.plugin.setOrbitPin(linkedNodeId, {
            anchor_id: nodeId,
            radius: orbitRadius,
            angle
          });
          linkedNode.x = anchorNode.x + Math.cos(angle) * orbitRadius;
          linkedNode.y = anchorNode.y + Math.sin(angle) * orbitRadius;
          linkedNode.vx = 0;
          linkedNode.vy = 0;
          orbitPinnedCount += 1;
        }
        if (orbitPinnedCount <= 0) {
          new Notice2(`No ${targetLabel}`);
          return;
        }
        this.markNodeSpatialIndexDirty();
        this.kickLayoutSearch();
        this.plugin.renderAllViews();
        new Notice2(`Orbit pinned ${targetLabel}: ${orbitPinnedCount}`);
      }
      async unpinLinkedNodesFromOrbit(nodeId) {
        const linkedNodeIds = this.getLinkedNodeIds(nodeId);
        if (linkedNodeIds.length === 0) {
          new Notice2("No linked nodes");
          return;
        }
        let unpinnedCount = 0;
        for (const linkedNodeId of linkedNodeIds) {
          const orbitPin = this.plugin.getOrbitPin(linkedNodeId);
          if (!orbitPin || orbitPin.anchor_id !== nodeId) continue;
          this.plugin.removeOrbitPin(linkedNodeId);
          unpinnedCount += 1;
        }
        if (unpinnedCount <= 0) {
          new Notice2("No linked orbit pins");
          return;
        }
        this.kickLayoutSearch();
        this.plugin.renderAllViews();
        new Notice2(`Unpinned linked orbit nodes: ${unpinnedCount}`);
      }
      // Linked-node discovery helpers reused by multiple bulk actions.
      getLinkedNodeIds(nodeId) {
        const linkedNodeIds = this.neighborsById.get(nodeId);
        if (!linkedNodeIds) return [];
        const result = [];
        for (const linkedNodeId of linkedNodeIds) {
          if (linkedNodeId === nodeId) continue;
          if (!this.nodeById.has(linkedNodeId)) continue;
          result.push(linkedNodeId);
        }
        return result;
      }
      selectLinkedNodes(nodeId) {
        if (!nodeId || !this.nodeById.has(nodeId)) return;
        const selectedNodeIds = /* @__PURE__ */ new Set([nodeId, ...this.getLinkedNodeIds(nodeId)]);
        this.setNodeSelection(selectedNodeIds);
        new Notice2(`Selected linked nodes: ${selectedNodeIds.size}`);
      }
      getLinkedNodeDisplayName(node) {
        if (!node) return "";
        const label = String(node.label || "").trim();
        if (label) return label;
        const meta = this.nodeMetaById.get(node.id) || node.meta || null;
        const fileName = String((meta == null ? void 0 : meta.fileName) || "").trim();
        if (fileName) return fileName;
        return String(node.id || "").trim();
      }
      getLinkedNodeDisplayPath(node) {
        if (!node) return "";
        const meta = this.nodeMetaById.get(node.id) || node.meta || null;
        const path = String((meta == null ? void 0 : meta.path) || "").trim();
        if (path) return path;
        return String(node.id || "").trim();
      }
      async copyTextToClipboard(text) {
        var _a;
        const normalizedText = String(text || "");
        if (!normalizedText) return false;
        try {
          if ((_a = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a.writeText) {
            await navigator.clipboard.writeText(normalizedText);
            return true;
          }
        } catch (e) {
        }
        try {
          const textareaEl = document.createElement("textarea");
          textareaEl.value = normalizedText;
          textareaEl.setAttribute("readonly", "");
          textareaEl.style.position = "fixed";
          textareaEl.style.top = "-10000px";
          textareaEl.style.opacity = "0";
          document.body.appendChild(textareaEl);
          textareaEl.select();
          const copied = document.execCommand("copy");
          document.body.removeChild(textareaEl);
          return !!copied;
        } catch (e) {
          return false;
        }
      }
      async copyLinkedNames(nodeId) {
        const linkedNodeIds = this.getLinkedNodeIds(nodeId);
        if (linkedNodeIds.length <= 0) {
          new Notice2("No linked nodes");
          return;
        }
        const linkedNames = linkedNodeIds.map((linkedNodeId) => this.nodeById.get(linkedNodeId)).filter((linkedNode) => !!linkedNode).map((linkedNode) => this.getLinkedNodeDisplayName(linkedNode)).filter((value) => value.length > 0).sort((leftValue, rightValue) => leftValue.localeCompare(rightValue));
        if (linkedNames.length <= 0) {
          new Notice2("No linked nodes");
          return;
        }
        const copied = await this.copyTextToClipboard(this.formatCopyList(linkedNames));
        new Notice2(
          copied ? `Copied linked names: ${linkedNames.length}` : "Failed to copy linked names"
        );
      }
      async copyLinkedPaths(nodeId) {
        const linkedNodeIds = this.getLinkedNodeIds(nodeId);
        if (linkedNodeIds.length <= 0) {
          new Notice2("No linked nodes");
          return;
        }
        const linkedPaths = linkedNodeIds.map((linkedNodeId) => this.nodeById.get(linkedNodeId)).filter((linkedNode) => !!linkedNode).map((linkedNode) => this.getLinkedNodeDisplayPath(linkedNode)).filter((value) => value.length > 0).sort((leftValue, rightValue) => leftValue.localeCompare(rightValue));
        if (linkedPaths.length <= 0) {
          new Notice2("No linked nodes");
          return;
        }
        const copied = await this.copyTextToClipboard(this.formatCopyList(linkedPaths));
        new Notice2(
          copied ? `Copied linked paths: ${linkedPaths.length}` : "Failed to copy linked paths"
        );
      }
      formatCopyList(items) {
        const values = Array.isArray(items) ? items.filter((item) => String(item || "").length > 0) : [];
        if (values.length <= 0) return "";
        return values.map((value, index) => index < values.length - 1 ? `${value},` : String(value)).join("\n");
      }
      getLinkedNodeIdsByKind(nodeId, targetKind = "all") {
        var _a;
        const linkedNodeIds = this.getLinkedNodeIds(nodeId);
        if (targetKind !== "regular" && targetKind !== "attachment") return linkedNodeIds;
        const result = [];
        for (const linkedNodeId of linkedNodeIds) {
          const linkedNode = this.nodeById.get(linkedNodeId);
          if (!linkedNode) continue;
          const isAttachment = !!((_a = linkedNode.meta) == null ? void 0 : _a.isAttachment);
          if (targetKind === "regular" && isAttachment) continue;
          if (targetKind === "attachment" && !isAttachment) continue;
          result.push(linkedNodeId);
        }
        return result;
      }
      // Layout persistence: save/load full graph layout including settings and pin modes.
      async saveCurrentLayout(options = {}) {
        const silent = !!options.silent;
        if (this.isSearchFilled()) {
          if (!silent) new Notice2("Clear search field to save");
          return false;
        }
        const sourceData = this.plugin.data;
        const layoutName = this.plugin.normalizeLayoutFileName(
          options.layoutFileName || this.plugin.getActiveLayoutFileName()
        );
        return this.plugin.runLayoutFileOperation(async () => {
          if (this.plugin.data !== sourceData || this.isSearchFilled()) return false;
          this.layoutAutosaveDirty = true;
          const snapshot = this.captureLayoutSnapshot(layoutName);
          const nodeCount = this.nodes.length;
          const snapshotText = JSON.stringify(snapshot);
          const editVersion = this.layoutEditVersion;
          const persistRevision = this.plugin._persistRevision;
          let written = false;
          try {
            written = await this.plugin.persistActiveLayoutFile(snapshot, layoutName);
          } catch (e) {
            written = false;
          }
          if (!written) {
            if (!silent) new Notice2("Failed to save layout. Changes are still unsaved.");
            return false;
          }
          if (this.plugin.data === sourceData) {
            const unchanged = this.layoutEditVersion === editVersion && this.plugin._persistRevision === persistRevision && JSON.stringify(this.captureLayoutSnapshot(layoutName)) === snapshotText;
            for (const key of [
              "saved_positions",
              "saved_layout_settings",
              "saved_layout_pins",
              "saved_layout_orbit_pins"
            ]) {
              sourceData[key] = snapshot[key];
            }
            sourceData.active_layout_name = layoutName;
            this.layoutAutosaveDirty = !unchanged;
            if (unchanged) {
              this.layoutStillFrames = 0;
              for (const node of this.nodes) {
                node.vx = 0;
                node.vy = 0;
              }
            }
            this.plugin.schedulePersist();
            this.syncLayoutFileSelectionFromPlugin();
          }
          if (!silent) new Notice2(`Layout saved: ${nodeCount} nodes`);
          return true;
        });
      }
      captureLayoutSnapshot(layoutName) {
        const snapshot = JSON.parse(JSON.stringify(this.plugin.normalizeData(this.plugin.data)));
        snapshot.active_layout_name = layoutName;
        for (const node of this.nodes) {
          snapshot.saved_positions[node.id] = { x: node.x, y: node.y };
        }
        snapshot.saved_layout_settings = Object.assign({}, snapshot.settings);
        snapshot.saved_layout_pins = Object.assign({}, snapshot.pins);
        snapshot.saved_layout_orbit_pins = Object.assign({}, snapshot.orbit_pins);
        snapshot.view_state.side_panel_sections = {};
        return snapshot;
      }
      async loadSavedLayout(options = {}) {
        const silent = !!options.silent;
        const layoutName = options.layoutFileName || this.plugin.getActiveLayoutFileName();
        const loaded = await this.plugin.setActiveLayoutFile(layoutName, { loadFromFile: true });
        if (!loaded) {
          new Notice2(`Cannot read layout: ${layoutName}. Current changes kept.`);
          this.syncLayoutFileSelectionFromPlugin();
          return false;
        }
        const views = this.app.workspace.getLeavesOfType(GRAPHFRONTIER_VIEW_TYPE2).map((leaf) => leaf.view);
        if (!views.includes(this)) views.push(this);
        for (const view of views) {
          view.searchMode = this.plugin.data.settings.search_mode === "filter" ? "filter" : "find";
          view.sidePanelSectionState = this.plugin.getSidePanelSectionsState();
          view.syncLayoutFileSelectionFromPlugin();
          view.layoutAutosaveDirty = false;
          view.layoutStillFrames = 0;
          view.layoutPaused = true;
          if (!view.isOpen) continue;
          view.refreshFromVault({ keepCamera: true, forceSavedPositions: true, skipLayoutKick: true });
          view.buildSidePanel();
        }
        this.plugin.renderAllViews();
        if (!silent) new Notice2("Layout loaded");
        return true;
      }
      // Grid occupancy utilities for collision-safe snapping.
      snapPositionToGrid(nodeId, x, y) {
        const step = this.plugin.clampGridStep(this.plugin.getSettings().grid_step);
        const occupied = this.getOccupiedGridCells(nodeId);
        const snapped = this.findNearestFreeGridCell(x, y, step, occupied);
        return { x: snapped.x, y: snapped.y };
      }
      getOccupiedGridCells(exceptNodeId = null) {
        const step = this.plugin.clampGridStep(this.plugin.getSettings().grid_step);
        const occupied = /* @__PURE__ */ new Set();
        for (const [nodeId, pos] of Object.entries(this.plugin.data.pins)) {
          if (nodeId === exceptNodeId) continue;
          if (!pos || typeof pos !== "object") continue;
          const gx = Math.round(pos.x / step);
          const gy = Math.round(pos.y / step);
          occupied.add(this.gridKey(gx, gy));
        }
        return occupied;
      }
      gridKey(gx, gy) {
        return `${gx},${gy}`;
      }
      findNearestFreeGridCell(x, y, step, occupied) {
        const baseGX = Math.round(x / step);
        const baseGY = Math.round(y / step);
        const testCell = (gx, gy) => {
          const key = this.gridKey(gx, gy);
          if (occupied.has(key)) return null;
          const cellX = gx * step;
          const cellY = gy * step;
          const dx = x - cellX;
          const dy = y - cellY;
          return {
            gx,
            gy,
            x: cellX,
            y: cellY,
            d2: dx * dx + dy * dy
          };
        };
        const direct = testCell(baseGX, baseGY);
        if (direct) return direct;
        let best = null;
        const maxRing = 260;
        for (let ring = 1; ring <= maxRing; ring++) {
          best = null;
          for (let dx = -ring; dx <= ring; dx++) {
            const top = testCell(baseGX + dx, baseGY - ring);
            if (top && (!best || top.d2 < best.d2)) best = top;
            const bottom = testCell(baseGX + dx, baseGY + ring);
            if (bottom && (!best || bottom.d2 < best.d2)) best = bottom;
          }
          for (let dy = -ring + 1; dy <= ring - 1; dy++) {
            const left = testCell(baseGX - ring, baseGY + dy);
            if (left && (!best || left.d2 < best.d2)) best = left;
            const right = testCell(baseGX + ring, baseGY + dy);
            if (right && (!best || right.d2 < best.d2)) best = right;
          }
          if (best) return best;
        }
        return {
          gx: baseGX,
          gy: baseGY,
          x: baseGX * step,
          y: baseGY * step,
          d2: 0
        };
      }
      // View-state persistence and file opening helpers.
      persistViewState() {
        this.plugin.data.view_state.pan_x = this.cameraTarget.x;
        this.plugin.data.view_state.pan_y = this.cameraTarget.y;
        this.plugin.data.view_state.zoom = this.cameraTarget.zoom;
        this.plugin.schedulePersist(1200);
      }
      async openNodeFile(nodeId) {
        const abstractFile = this.app.vault.getAbstractFileByPath(nodeId);
        if (!abstractFile) return;
        if (typeof abstractFile.extension === "string" && abstractFile.extension.toLowerCase() !== "md")
          return;
        if (typeof this.app.workspace.getLeaf === "function" && typeof abstractFile.path === "string") {
          const leaf = this.app.workspace.getLeaf(true);
          await leaf.openFile(abstractFile);
        }
      }
      // Node visual metrics: radius and label visibility thresholds.
      getNodeRadius(node) {
        return getNodeRadiusRender(this, node);
      }
      getLabelZoomThreshold() {
        return getLabelZoomThresholdRender(this);
      }
      getLabelFontSize() {
        return getLabelFontSizeRender(this);
      }
      // Group color matching logic used during node rendering.
      getGroupColorForNode(node) {
        return getGroupColorForNodeRender(this, node);
      }
      nodeMatchesParsedGroup(meta, parsed, node = null) {
        return nodeMatchesParsedGroupRender(meta, parsed, node);
      }
      // Hit testing and coordinate transforms between screen and world spaces.
      getNodeAtScreen(screenX, screenY) {
        const world = this.screenToWorld(screenX, screenY);
        const visibleNodeIds = this.getFilterVisibleNodeIds();
        const hasFilter = visibleNodeIds instanceof Set;
        const zoom = Math.max(this.camera.zoom, 1e-4);
        const maxCandidateRadius = 4 + 2 / zoom;
        if (!this.isNodeSpatialIndexFresh()) {
          return this.getNodeAtWorldByScan(world, visibleNodeIds, hasFilter, zoom, maxCandidateRadius);
        }
        const spatialIndex = this.nodeSpatialIndex;
        const cellSize = spatialIndex.cellSize;
        const centerGX = Math.floor(world.x / cellSize);
        const centerGY = Math.floor(world.y / cellSize);
        const bucketRange = Math.max(1, Math.ceil(maxCandidateRadius / cellSize));
        let bestNode = null;
        let bestDist2 = Infinity;
        for (let offsetX = -bucketRange; offsetX <= bucketRange; offsetX += 1) {
          for (let offsetY = -bucketRange; offsetY <= bucketRange; offsetY += 1) {
            const bucket = spatialIndex.buckets.get(`${centerGX + offsetX}:${centerGY + offsetY}`);
            if (!bucket) continue;
            for (const node of bucket) {
              if (hasFilter && (!visibleNodeIds || !visibleNodeIds.has(node.id))) continue;
              const dx = node.x - world.x;
              const dy = node.y - world.y;
              const dist2 = dx * dx + dy * dy;
              if (dist2 < bestDist2) {
                bestDist2 = dist2;
                bestNode = node;
              }
            }
          }
        }
        if (!bestNode) return null;
        const baseRadius = this.getNodeRadius(bestNode);
        const maxDist = Math.max(1, baseRadius + 2 / zoom);
        if (bestDist2 > maxDist * maxDist) return null;
        return bestNode;
      }
      getNodeAtWorldByScan(world, visibleNodeIds, hasFilter, zoom, maxCandidateRadius) {
        let bestNode = null;
        let bestDist2 = Infinity;
        const coarseMaxDist = Math.max(1, maxCandidateRadius);
        const coarseMaxDist2 = coarseMaxDist * coarseMaxDist;
        for (const node of this.nodes) {
          if (hasFilter && (!visibleNodeIds || !visibleNodeIds.has(node.id))) continue;
          const dx = node.x - world.x;
          if (Math.abs(dx) > coarseMaxDist) continue;
          const dy = node.y - world.y;
          if (Math.abs(dy) > coarseMaxDist) continue;
          const dist2 = dx * dx + dy * dy;
          if (dist2 > coarseMaxDist2 || dist2 >= bestDist2) continue;
          bestDist2 = dist2;
          bestNode = node;
        }
        if (!bestNode) return null;
        const baseRadius = this.getNodeRadius(bestNode);
        const maxDist = Math.max(1, baseRadius + 2 / zoom);
        if (bestDist2 > maxDist * maxDist) return null;
        return bestNode;
      }
      screenToWorld(screenX, screenY) {
        return this.screenToWorldWithCamera(screenX, screenY, this.camera);
      }
      screenToWorldWithCamera(screenX, screenY, cameraRef) {
        return {
          x: (screenX - this.viewWidth / 2) / cameraRef.zoom + cameraRef.x,
          y: (screenY - this.viewHeight / 2) / cameraRef.zoom + cameraRef.y
        };
      }
      worldToScreen(worldX, worldY) {
        return {
          x: (worldX - this.camera.x) * this.camera.zoom + this.viewWidth / 2,
          y: (worldY - this.camera.y) * this.camera.zoom + this.viewHeight / 2
        };
      }
    };
    var ExportStaticHtmlPathModal = class _ExportStaticHtmlPathModal extends Modal {
      constructor(app, initialPath, resolve) {
        super(app);
        this.initialPath = String(initialPath || "");
        this.resolve = resolve;
      }
      static openFor(app, initialPath = "") {
        return new Promise((resolve) => {
          const modal = new _ExportStaticHtmlPathModal(app, initialPath, resolve);
          modal.open();
        });
      }
      onOpen() {
        const { contentEl } = this;
        contentEl.empty();
        contentEl.createEl("h3", {
          text: "Write the folder path and the file name for saving."
        });
        const form = contentEl.createDiv({ cls: "graphfrontier-coord-form" });
        const pathInput = form.createEl("input", {
          type: "text",
          cls: "graphfrontier-coord-input"
        });
        pathInput.value = this.initialPath;
        const submit = () => {
          const targetPath = String(pathInput.value || "").trim();
          if (!targetPath) {
            new Notice2("Export path is required");
            return;
          }
          const done = this.resolve;
          this.resolve = null;
          done(targetPath);
          this.close();
        };
        const actions = contentEl.createDiv({ cls: "graphfrontier-coord-actions" });
        const exportBtn = actions.createEl("button", { text: "Export" });
        const cancelBtn = actions.createEl("button", { text: "Cancel" });
        exportBtn.addEventListener("click", submit);
        cancelBtn.addEventListener("click", () => {
          const done = this.resolve;
          this.resolve = null;
          done(null);
          this.close();
        });
        pathInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") submit();
        });
        pathInput.focus();
        pathInput.select();
      }
      onClose() {
        if (this.resolve) {
          this.resolve(null);
          this.resolve = null;
        }
        this.contentEl.empty();
      }
    };
    var ExactCoordinatesModal = class _ExactCoordinatesModal extends Modal {
      constructor(app, initialX, initialY, resolve) {
        super(app);
        this.initialX = initialX;
        this.initialY = initialY;
        this.resolve = resolve;
      }
      static openFor(app, initialX, initialY) {
        return new Promise((resolve) => {
          const modal = new _ExactCoordinatesModal(app, initialX, initialY, resolve);
          modal.open();
        });
      }
      onOpen() {
        const { contentEl } = this;
        contentEl.empty();
        contentEl.createEl("h3", { text: "Set exact coordinates" });
        const form = contentEl.createDiv({ cls: "graphfrontier-coord-form" });
        const xInput = form.createEl("input", { type: "text", cls: "graphfrontier-coord-input" });
        xInput.value = this.initialX.toFixed(2);
        const yInput = form.createEl("input", { type: "text", cls: "graphfrontier-coord-input" });
        yInput.value = this.initialY.toFixed(2);
        const parseValue = (rawValue) => {
          const text = String(rawValue || "").trim();
          if (!text) return NaN;
          return Number(text.replace(",", "."));
        };
        const submit = () => {
          const x = parseValue(xInput.value);
          const y = parseValue(yInput.value);
          if (!Number.isFinite(x) || !Number.isFinite(y)) {
            new Notice2("Invalid coordinates");
            return;
          }
          const done = this.resolve;
          this.resolve = null;
          done({ x, y });
          this.close();
        };
        const actions = contentEl.createDiv({ cls: "graphfrontier-coord-actions" });
        const okBtn = actions.createEl("button", { text: "Apply" });
        const cancelBtn = actions.createEl("button", { text: "Cancel" });
        okBtn.addEventListener("click", submit);
        cancelBtn.addEventListener("click", () => {
          const done = this.resolve;
          this.resolve = null;
          done(null);
          this.close();
        });
        xInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") submit();
        });
        yInput.addEventListener("keydown", (event) => {
          if (event.key === "Enter") submit();
        });
      }
      onClose() {
        if (this.resolve) {
          this.resolve(null);
          this.resolve = null;
        }
        this.contentEl.empty();
      }
    };
    module2.exports = {
      GraphFrontierView: GraphFrontierView2
    };
  }
});

// src/main.js
var { Plugin, Notice } = require("obsidian");
var {
  GRAPHFRONTIER_VIEW_TYPE,
  NODE_MULTIPLIER_MIN,
  NODE_MULTIPLIER_MAX,
  ZOOM_STEP_FACTOR,
  DEFAULT_DATA,
  MIN_ZOOM,
  MAX_ZOOM,
  HOTKEY_COMMANDS,
  HOTKEY_COMMAND_IDS,
  HOTKEY_MODIFIER_KEYS,
  HOTKEY_KEY_ALIASES
} = require_constants();
var { GraphFrontierView } = require_view();
function registerGraphFrontierCommands(plugin) {
  plugin.addCommand({
    id: "graphfrontier-open-view",
    name: "Open GraphFrontier",
    callback: () => plugin.openOrRevealGraphFrontierView()
  });
  const viewActions = [
    {
      id: "graphfrontier-toggle-pin-under-cursor",
      name: "Toggle pin under cursor",
      method: "togglePinUnderCursor"
    },
    {
      id: "graphfrontier-set-force-multiplier-under-cursor",
      name: "Set force multiplier under cursor",
      method: "promptSetMultiplierUnderCursor"
    },
    {
      id: "graphfrontier-clear-force-multiplier-under-cursor",
      name: "Clear force multiplier under cursor",
      method: "clearMultiplierUnderCursor"
    },
    {
      id: "graphfrontier-align-pins-to-grid",
      name: "Align pins to grid",
      method: "alignPinsToGrid"
    },
    {
      id: "graphfrontier-pin-node-under-cursor",
      name: "Pin node under cursor",
      method: "commandPinNode"
    },
    {
      id: "graphfrontier-pin-to-grid-under-cursor",
      name: "Pin node to grid under cursor",
      method: "commandPinToGrid"
    },
    {
      id: "graphfrontier-unpin-node-under-cursor",
      name: "Unpin node under cursor",
      method: "commandUnpinNode"
    },
    {
      id: "graphfrontier-pin-linked-to-orbit-under-cursor",
      name: "Pin linked to orbit under cursor",
      method: "commandPinLinkedToOrbit"
    },
    {
      id: "graphfrontier-toggle-selection-under-cursor",
      name: "Toggle selection under cursor",
      method: "commandToggleSelectionUnderCursor"
    },
    {
      id: "graphfrontier-arm-box-selection",
      name: "Arm box selection",
      method: "commandArmBoxSelection"
    },
    {
      id: "graphfrontier-clear-selection",
      name: "Clear selection",
      method: "commandClearSelection"
    },
    {
      id: "graphfrontier-export-static-html",
      name: "Export static graph to HTML",
      method: "commandExportStaticHtml"
    },
    {
      id: "graphfrontier-unpin-linked-nodes-under-cursor",
      name: "Unpin linked nodes under cursor",
      method: "commandUnpinLinkedNodes"
    },
    {
      id: "graphfrontier-add-to-search-under-cursor",
      name: "Add to search under cursor",
      method: "commandAddToSearch"
    },
    {
      id: "graphfrontier-show-local-graph-under-cursor",
      name: "Show local graph under cursor",
      method: "commandShowLocalGraph"
    },
    {
      id: "graphfrontier-pin-linked-nodes-under-cursor",
      name: "Pin linked nodes under cursor",
      method: "commandPinLinkedNodes"
    },
    {
      id: "graphfrontier-pin-linked-nodes-to-grid-under-cursor",
      name: "Pin linked nodes to grid under cursor",
      method: "commandPinLinkedNodesToGrid"
    },
    {
      id: "graphfrontier-paint-edges-under-cursor",
      name: "Paint edges under cursor",
      method: "commandPaintEdges"
    },
    {
      id: "graphfrontier-clear-painted-edges-under-cursor",
      name: "Clear painted edges under cursor",
      method: "commandClearPaintedEdges"
    },
    {
      id: "graphfrontier-strong-pull-under-cursor",
      name: "Strong pull under cursor",
      method: "commandStrongPull"
    },
    {
      id: "graphfrontier-clear-strong-pull-under-cursor",
      name: "Clear strong pull under cursor",
      method: "commandClearStrongPull"
    },
    { id: "graphfrontier-save-layout", name: "Save layout", method: "saveCurrentLayout" },
    { id: "graphfrontier-load-layout", name: "Load layout", method: "loadSavedLayout" },
    { id: "graphfrontier-pin-all", name: "Pin all nodes", method: "commandPinAllNodes" },
    { id: "graphfrontier-unpin-all", name: "Unpin all nodes", method: "commandUnpinAllNodes" }
  ];
  for (const action of viewActions) {
    plugin.addCommand({
      id: action.id,
      name: action.name,
      callback: async () => {
        const view = plugin.getActiveGraphFrontierView();
        if (!view) {
          new Notice("Open GraphFrontier view");
          return;
        }
        const handler = view[action.method];
        if (typeof handler !== "function") return;
        await handler.call(view);
      }
    });
  }
}
function registerGraphFrontierRefreshEvents(plugin) {
  const shouldIgnoreVaultEvent = (file) => {
    var _a, _b, _c;
    const filePath = String((file == null ? void 0 : file.path) || "");
    if (!filePath) return false;
    const configDir = String(((_b = (_a = plugin.app) == null ? void 0 : _a.vault) == null ? void 0 : _b.configDir) || ".obsidian").replace(/\/+$/u, "");
    const pluginId = String(((_c = plugin.manifest) == null ? void 0 : _c.id) || "graphfrontier").trim() || "graphfrontier";
    return filePath === `${configDir}/plugins/${pluginId}` || filePath.startsWith(`${configDir}/plugins/${pluginId}/`);
  };
  const scheduleRefreshForVaultEvent = (file) => {
    if (shouldIgnoreVaultEvent(file)) return;
    plugin.scheduleRefreshAllViews({ passive: true });
  };
  plugin.registerEvent(
    plugin.app.metadataCache.on("resolved", () => {
      plugin.metadataResolvedOnce = true;
      plugin.scheduleRefreshAllViews({ metadataResolved: true, passive: true });
    })
  );
  plugin.registerEvent(plugin.app.vault.on("create", scheduleRefreshForVaultEvent));
  plugin.registerEvent(plugin.app.vault.on("modify", scheduleRefreshForVaultEvent));
  plugin.registerEvent(plugin.app.vault.on("delete", scheduleRefreshForVaultEvent));
  plugin.registerEvent(plugin.app.vault.on("rename", scheduleRefreshForVaultEvent));
}
function normalizeHotkeyKeyUtil(rawKey) {
  const rawText = String(rawKey || "").trim();
  if (!rawText) return "";
  const loweredKey = rawText.toLowerCase();
  if (HOTKEY_MODIFIER_KEYS.has(loweredKey)) return "";
  if (HOTKEY_KEY_ALIASES[loweredKey]) return HOTKEY_KEY_ALIASES[loweredKey];
  if (/^f([1-9]|1[0-2])$/i.test(rawText)) return rawText.toUpperCase();
  if (rawText.length === 1) return rawText.toUpperCase();
  return `${rawText.charAt(0).toUpperCase()}${rawText.slice(1).toLowerCase()}`;
}
function normalizeHotkeyTextUtil(rawHotkey) {
  const hotkeyText = String(rawHotkey || "").trim();
  if (!hotkeyText) return "";
  const parts = hotkeyText.split("+").map((part) => String(part || "").trim()).filter(Boolean);
  if (parts.length === 0) return "";
  let hasMod = false;
  let hasAlt = false;
  let hasShift = false;
  let hotkeyKey = "";
  for (const rawPart of parts) {
    const part = rawPart.toLowerCase();
    if (part === "mod" || part === "cmd" || part === "command" || part === "ctrl" || part === "control" || part === "meta") {
      hasMod = true;
      continue;
    }
    if (part === "alt" || part === "option") {
      hasAlt = true;
      continue;
    }
    if (part === "shift") {
      hasShift = true;
      continue;
    }
    if (hotkeyKey) return "";
    hotkeyKey = normalizeHotkeyKeyUtil(rawPart);
  }
  if (!hotkeyKey) return "";
  const normalizedParts = [];
  if (hasMod) normalizedParts.push("Mod");
  if (hasAlt) normalizedParts.push("Alt");
  if (hasShift) normalizedParts.push("Shift");
  normalizedParts.push(hotkeyKey);
  return normalizedParts.join("+");
}
function getHotkeyFromKeyboardEventUtil(keyboardEvent) {
  if (!keyboardEvent || keyboardEvent.repeat) return "";
  const hotkeyKey = normalizeHotkeyKeyUtil(keyboardEvent.key);
  if (!hotkeyKey) return "";
  const hotkeyParts = [];
  if (keyboardEvent.ctrlKey || keyboardEvent.metaKey) hotkeyParts.push("Mod");
  if (keyboardEvent.altKey) hotkeyParts.push("Alt");
  if (keyboardEvent.shiftKey) hotkeyParts.push("Shift");
  hotkeyParts.push(hotkeyKey);
  return normalizeHotkeyTextUtil(hotkeyParts.join("+"));
}
module.exports = class GraphFrontierPlugin extends Plugin {
  async onload() {
    var _a, _b;
    const loadedData = await this.loadData();
    this.data = this.normalizeData(loadedData);
    this._persistTimer = null;
    this._refreshTimer = null;
    this._pendingRefreshOptions = {};
    const resolvedLinks = (_b = (_a = this.app) == null ? void 0 : _a.metadataCache) == null ? void 0 : _b.resolvedLinks;
    this.metadataResolvedOnce = !!resolvedLinks && typeof resolvedLinks === "object" && Object.keys(resolvedLinks).length > 0;
    await this.bootstrapActiveLayoutData();
    this.addRibbonIcon("orbit", "Open GraphFrontier", () => this.openOrRevealGraphFrontierView());
    registerGraphFrontierCommands(this);
    this.registerView(GRAPHFRONTIER_VIEW_TYPE, (leaf) => new GraphFrontierView(leaf, this));
    registerGraphFrontierRefreshEvents(this);
  }
  onunload() {
    if (this._persistTimer) window.clearTimeout(this._persistTimer);
    if (this._refreshTimer) window.clearTimeout(this._refreshTimer);
    this._pendingRefreshOptions = {};
  }
  // Persisted-data normalization: sanitize and repair loaded state before use.
  normalizeData(data) {
    const safe = data && typeof data === "object" ? data : {};
    const activeLayoutName = this.normalizeLayoutFileName(safe.active_layout_name);
    const pins = safe.pins && typeof safe.pins === "object" ? safe.pins : {};
    const orbitPins = safe.orbit_pins && typeof safe.orbit_pins === "object" ? safe.orbit_pins : {};
    const savedPositions = safe.saved_positions && typeof safe.saved_positions === "object" ? safe.saved_positions : {};
    const savedLayoutSettings = safe.saved_layout_settings && typeof safe.saved_layout_settings === "object" ? safe.saved_layout_settings : {};
    const savedLayoutPins = safe.saved_layout_pins && typeof safe.saved_layout_pins === "object" ? safe.saved_layout_pins : {};
    const savedLayoutOrbitPins = safe.saved_layout_orbit_pins && typeof safe.saved_layout_orbit_pins === "object" ? safe.saved_layout_orbit_pins : {};
    const multipliers = safe.node_force_multipliers && typeof safe.node_force_multipliers === "object" ? safe.node_force_multipliers : {};
    const strongPullNodes = safe.strong_pull_nodes && typeof safe.strong_pull_nodes === "object" ? safe.strong_pull_nodes : {};
    const paintedEdgeColors = safe.painted_edge_colors && typeof safe.painted_edge_colors === "object" ? safe.painted_edge_colors : {};
    const rawGroups = Array.isArray(safe.groups) ? safe.groups : [];
    const rawBlacklist = Array.isArray(safe.blacklist) ? safe.blacklist : [];
    const rawWhitelist = Array.isArray(safe.whitelist) ? safe.whitelist : [];
    const rawHotkeys = safe.hotkeys && typeof safe.hotkeys === "object" ? safe.hotkeys : {};
    const settings = safe.settings && typeof safe.settings === "object" ? safe.settings : {};
    const viewState = safe.view_state && typeof safe.view_state === "object" ? safe.view_state : {};
    const normalized = {
      active_layout_name: activeLayoutName,
      pins: {},
      orbit_pins: {},
      saved_positions: {},
      saved_layout_settings: {},
      saved_layout_pins: {},
      saved_layout_orbit_pins: {},
      node_force_multipliers: {},
      strong_pull_nodes: {},
      painted_edge_colors: {},
      node_label_sizes: {},
      groups: [],
      blacklist: [],
      whitelist: [],
      hotkeys: {},
      settings: Object.assign({}, DEFAULT_DATA.settings, settings),
      view_state: Object.assign({}, DEFAULT_DATA.view_state, viewState)
    };
    for (const [nodeId, size] of Object.entries(safe.node_label_sizes || {})) {
      if (typeof size !== "number" || !Number.isFinite(size)) continue;
      normalized.node_label_sizes[nodeId] = this.clampNumber(size, 5, 20, 9);
    }
    for (const [nodeId, position] of Object.entries(pins)) {
      if (!position || typeof position !== "object") continue;
      const x = Number(position.x);
      const y = Number(position.y);
      if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
      const mode = position.mode === "grid" ? "grid" : "exact";
      normalized.pins[nodeId] = { x, y, mode };
    }
    for (const [nodeId, orbitMeta] of Object.entries(orbitPins)) {
      if (!orbitMeta || typeof orbitMeta !== "object") continue;
      const anchorId = String(orbitMeta.anchor_id || "").trim();
      const radius = Number(orbitMeta.radius);
      const angle = Number(orbitMeta.angle);
      if (!anchorId || anchorId === nodeId) continue;
      if (!Number.isFinite(radius) || radius <= 0) continue;
      if (!Number.isFinite(angle)) continue;
      normalized.orbit_pins[nodeId] = {
        anchor_id: anchorId,
        radius,
        angle
      };
      delete normalized.pins[nodeId];
    }
    for (const [nodeId, position] of Object.entries(savedPositions)) {
      if (!position || typeof position !== "object") continue;
      const x = Number(position.x);
      const y = Number(position.y);
      if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
      normalized.saved_positions[nodeId] = { x, y };
    }
    normalized.saved_layout_settings = Object.assign({}, savedLayoutSettings);
    for (const [nodeId, position] of Object.entries(savedLayoutPins)) {
      if (!position || typeof position !== "object") continue;
      const x = Number(position.x);
      const y = Number(position.y);
      if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
      const mode = position.mode === "grid" ? "grid" : "exact";
      normalized.saved_layout_pins[nodeId] = { x, y, mode };
    }
    for (const [nodeId, orbitMeta] of Object.entries(savedLayoutOrbitPins)) {
      if (!orbitMeta || typeof orbitMeta !== "object") continue;
      const anchorId = String(orbitMeta.anchor_id || "").trim();
      const radius = Number(orbitMeta.radius);
      const angle = Number(orbitMeta.angle);
      if (!anchorId || anchorId === nodeId) continue;
      if (!Number.isFinite(radius) || radius <= 0) continue;
      if (!Number.isFinite(angle)) continue;
      normalized.saved_layout_orbit_pins[nodeId] = {
        anchor_id: anchorId,
        radius,
        angle
      };
      delete normalized.saved_layout_pins[nodeId];
    }
    normalized.settings.grid_step = this.clampGridStep(normalized.settings.grid_step);
    if (Number(normalized.settings.base_link_strength) < 1) {
      normalized.settings.base_link_strength = Number(normalized.settings.base_link_strength) / 25e-6;
    }
    normalized.settings.base_link_strength = this.clampNumber(
      normalized.settings.base_link_strength,
      1,
      100,
      DEFAULT_DATA.settings.base_link_strength
    );
    normalized.settings.link_distance = this.clampNumber(
      normalized.settings.link_distance,
      1,
      50,
      DEFAULT_DATA.settings.link_distance
    );
    normalized.settings.repel_strength = this.clampNumber(
      normalized.settings.repel_strength,
      0,
      100,
      DEFAULT_DATA.settings.repel_strength
    );
    normalized.settings.repel_radius = this.clampNumber(
      normalized.settings.repel_radius,
      20,
      500,
      DEFAULT_DATA.settings.repel_radius
    );
    if (Number(normalized.settings.center_strength) < 1) {
      normalized.settings.center_strength = Number(normalized.settings.center_strength) / 1e-5;
    }
    normalized.settings.center_strength = this.clampNumber(
      normalized.settings.center_strength,
      1,
      100,
      DEFAULT_DATA.settings.center_strength
    );
    normalized.settings.damping = this.clampNumber(
      normalized.settings.damping,
      0.01,
      0.9,
      DEFAULT_DATA.settings.damping
    );
    normalized.settings.node_size_scale = this.clampNumber(
      normalized.settings.node_size_scale,
      0.1,
      2,
      DEFAULT_DATA.settings.node_size_scale
    );
    normalized.settings.edge_width_scale = this.clampNumber(
      normalized.settings.edge_width_scale,
      0.01,
      1,
      DEFAULT_DATA.settings.edge_width_scale
    );
    normalized.settings.painted_edge_width = this.clampNumber(
      normalized.settings.painted_edge_width,
      0.01,
      1,
      DEFAULT_DATA.settings.painted_edge_width
    );
    if (normalized.settings.label_zoom_steps == null && settings.label_min_zoom != null) {
      const legacySlider = this.clampNumber(settings.label_min_zoom, 0.01, 1, 0.35);
      const legacyThreshold = this.clampNumber(1.01 - legacySlider, MIN_ZOOM, MAX_ZOOM, 1);
      const legacySteps = Math.round(Math.log(MAX_ZOOM / legacyThreshold) / Math.log(ZOOM_STEP_FACTOR)) + 1;
      normalized.settings.label_zoom_steps = legacySteps;
    }
    normalized.settings.label_zoom_steps = this.clampNumber(
      normalized.settings.label_zoom_steps,
      1,
      20,
      DEFAULT_DATA.settings.label_zoom_steps
    );
    normalized.settings.label_font_size = this.clampNumber(
      normalized.settings.label_font_size,
      5,
      20,
      DEFAULT_DATA.settings.label_font_size
    );
    normalized.settings.hover_dim_strength = this.clampNumber(
      normalized.settings.hover_dim_strength,
      0,
      100,
      DEFAULT_DATA.settings.hover_dim_strength
    );
    normalized.settings.strong_pull_multiplier = this.clampNumber(
      normalized.settings.strong_pull_multiplier,
      NODE_MULTIPLIER_MIN,
      NODE_MULTIPLIER_MAX,
      DEFAULT_DATA.settings.strong_pull_multiplier
    );
    const hasOrbitDistanceSetting = settings.orbit_distance != null;
    let orbitDistanceSetting = Number(normalized.settings.orbit_distance);
    if (!hasOrbitDistanceSetting && settings.orbit_distance_multiplier != null) {
      const legacyOrbitDistanceMultiplier = this.clampNumber(
        settings.orbit_distance_multiplier,
        0.1,
        2,
        0.2
      );
      orbitDistanceSetting = normalized.settings.link_distance * legacyOrbitDistanceMultiplier;
    }
    normalized.settings.orbit_distance = this.clampNumber(
      orbitDistanceSetting,
      1,
      100,
      DEFAULT_DATA.settings.orbit_distance
    );
    normalized.settings.attachment_size_multiplier = this.clampNumber(
      normalized.settings.attachment_size_multiplier,
      0.1,
      1,
      DEFAULT_DATA.settings.attachment_size_multiplier
    );
    let attachmentLinkDistanceSetting = Number(
      normalized.settings.attachment_link_distance_multiplier
    );
    if (Number.isFinite(attachmentLinkDistanceSetting) && attachmentLinkDistanceSetting > 0 && attachmentLinkDistanceSetting <= 1) {
      attachmentLinkDistanceSetting *= normalized.settings.link_distance;
    }
    normalized.settings.attachment_link_distance_multiplier = this.clampNumber(
      attachmentLinkDistanceSetting,
      1,
      100,
      DEFAULT_DATA.settings.attachment_link_distance_multiplier
    );
    normalized.settings.show_grid = !!normalized.settings.show_grid;
    normalized.settings.hide_orphans = !!normalized.settings.hide_orphans;
    normalized.settings.hide_attachments = !!normalized.settings.hide_attachments;
    normalized.settings.existing_files_only = !!normalized.settings.existing_files_only;
    normalized.settings.show_search_connections = normalized.settings.show_search_connections === true;
    normalized.settings.search_mode = normalized.settings.search_mode === "filter" || normalized.settings.search_mode === "filtr" ? "filter" : "find";
    normalized.settings.quick_pick_modifier = ["alt", "ctrl", "meta", "shift", "none"].includes(
      normalized.settings.quick_pick_modifier
    ) ? normalized.settings.quick_pick_modifier : DEFAULT_DATA.settings.quick_pick_modifier;
    normalized.settings.selection_box_modifier = ["alt", "ctrl", "meta", "shift", "none"].includes(
      normalized.settings.selection_box_modifier
    ) ? normalized.settings.selection_box_modifier : DEFAULT_DATA.settings.selection_box_modifier;
    normalized.settings.selection_toggle_modifier = [
      "alt",
      "ctrl",
      "meta",
      "shift",
      "none"
    ].includes(normalized.settings.selection_toggle_modifier) ? normalized.settings.selection_toggle_modifier : DEFAULT_DATA.settings.selection_toggle_modifier;
    normalized.settings.layout_autosave = !!normalized.settings.layout_autosave;
    normalized.settings.export_static_html_path = typeof normalized.settings.export_static_html_path === "string" ? normalized.settings.export_static_html_path.trim() : "";
    delete normalized.settings.max_multiplier;
    delete normalized.settings.label_min_zoom;
    delete normalized.settings.orbit_distance_multiplier;
    if (Number(settings.base_link_strength) === 0.08 && Number(settings.link_distance) === 220 && Number(settings.repel_strength) === 2800 && Number(settings.center_strength) === 0.015 && Number(settings.damping) === 0.86) {
      normalized.settings.base_link_strength = DEFAULT_DATA.settings.base_link_strength;
      normalized.settings.link_distance = DEFAULT_DATA.settings.link_distance;
      normalized.settings.repel_strength = DEFAULT_DATA.settings.repel_strength;
      normalized.settings.center_strength = DEFAULT_DATA.settings.center_strength;
      normalized.settings.damping = DEFAULT_DATA.settings.damping;
    }
    for (const [nodeId, rawValue] of Object.entries(multipliers)) {
      const multiplier = this.clampMultiplier(rawValue);
      if (multiplier > 1) normalized.node_force_multipliers[nodeId] = multiplier;
    }
    for (const [nodeId, rawValue] of Object.entries(strongPullNodes)) {
      if (rawValue) normalized.strong_pull_nodes[nodeId] = true;
    }
    for (const [nodeId, rawColor] of Object.entries(paintedEdgeColors)) {
      const colorText = String(rawColor || "").trim();
      if (!colorText) continue;
      normalized.painted_edge_colors[nodeId] = this.normalizeGroupColor(colorText);
    }
    if (Object.keys(normalized.strong_pull_nodes).length === 0) {
      for (const nodeId of Object.keys(normalized.node_force_multipliers)) {
        normalized.strong_pull_nodes[nodeId] = true;
      }
    }
    for (const rawGroup of rawGroups) {
      if (!rawGroup || typeof rawGroup !== "object") continue;
      const query = String(rawGroup.query || "").trim();
      if (!query) continue;
      const color = this.normalizeGroupColor(rawGroup.color);
      normalized.groups.push({
        id: typeof rawGroup.id === "string" && rawGroup.id ? rawGroup.id : this.createGroupId(),
        query,
        color,
        enabled: rawGroup.enabled !== false
      });
    }
    for (const rawRule of rawBlacklist) {
      if (!rawRule || typeof rawRule !== "object") continue;
      const query = String(rawRule.query || "").trim();
      if (!query) continue;
      normalized.blacklist.push({
        id: typeof rawRule.id === "string" && rawRule.id ? rawRule.id : this.createGroupId(),
        query,
        enabled: rawRule.enabled !== false
      });
    }
    for (const rawRule of rawWhitelist) {
      if (!rawRule || typeof rawRule !== "object") continue;
      const query = String(rawRule.query || "").trim();
      if (!query) continue;
      normalized.whitelist.push({
        id: typeof rawRule.id === "string" && rawRule.id ? rawRule.id : this.createGroupId(),
        query,
        enabled: rawRule.enabled !== false
      });
    }
    for (const [commandId, rawHotkey] of Object.entries(rawHotkeys)) {
      if (!HOTKEY_COMMAND_IDS.has(commandId)) continue;
      const normalizedHotkey = this.normalizeHotkeyText(rawHotkey);
      if (!normalizedHotkey) continue;
      normalized.hotkeys[commandId] = normalizedHotkey;
    }
    normalized.view_state.pan_x = this.clampNumber(normalized.view_state.pan_x, -1e7, 1e7, 0);
    normalized.view_state.pan_y = this.clampNumber(normalized.view_state.pan_y, -1e7, 1e7, 0);
    normalized.view_state.zoom = this.clampNumber(
      normalized.view_state.zoom,
      MIN_ZOOM,
      MAX_ZOOM,
      1
    );
    const rawSidePanelSections = normalized.view_state.side_panel_sections && typeof normalized.view_state.side_panel_sections === "object" ? normalized.view_state.side_panel_sections : {};
    const nextSidePanelSections = {};
    for (const [rawSectionId, rawState] of Object.entries(rawSidePanelSections)) {
      const sectionId = String(rawSectionId || "").trim().toLowerCase();
      if (!sectionId) continue;
      nextSidePanelSections[sectionId] = !!rawState;
    }
    normalized.view_state.side_panel_sections = nextSidePanelSections;
    return normalized;
  }
  // Utility helpers: clamp functions, id generation, and color normalization.
  normalizeGroupColor(rawColor) {
    const fallback = "#7aa2f7";
    const text = String(rawColor || "").trim();
    if (!/^#([0-9a-f]{6})$/i.test(text)) return fallback;
    return text.toLowerCase();
  }
  createGroupId() {
    return `group_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  }
  clampGridStep(value) {
    return this.clampNumber(value, 5, 50, DEFAULT_DATA.settings.grid_step);
  }
  clampMultiplier(value) {
    return this.clampNumber(value, NODE_MULTIPLIER_MIN, NODE_MULTIPLIER_MAX, NODE_MULTIPLIER_MIN);
  }
  clampStrongPullMultiplier(value) {
    return this.clampNumber(
      value,
      NODE_MULTIPLIER_MIN,
      NODE_MULTIPLIER_MAX,
      DEFAULT_DATA.settings.strong_pull_multiplier
    );
  }
  clampNumber(value, min, max, fallback) {
    const num = Number(value);
    if (!Number.isFinite(num)) return fallback;
    return Math.min(max, Math.max(min, num));
  }
  getSidePanelSectionsState() {
    var _a, _b;
    const rawSidePanelSections = ((_b = (_a = this.data) == null ? void 0 : _a.view_state) == null ? void 0 : _b.side_panel_sections) && typeof this.data.view_state.side_panel_sections === "object" ? this.data.view_state.side_panel_sections : {};
    const nextSidePanelSections = {};
    for (const [rawSectionId, rawState] of Object.entries(rawSidePanelSections)) {
      const sectionId = String(rawSectionId || "").trim().toLowerCase();
      if (!sectionId) continue;
      nextSidePanelSections[sectionId] = !!rawState;
    }
    return nextSidePanelSections;
  }
  applySidePanelSectionsState(targetData, sidePanelSectionsState = null) {
    if (!targetData || typeof targetData !== "object") return targetData;
    if (!targetData.view_state || typeof targetData.view_state !== "object") {
      targetData.view_state = Object.assign({}, DEFAULT_DATA.view_state);
    }
    const normalizedSections = sidePanelSectionsState && typeof sidePanelSectionsState === "object" ? sidePanelSectionsState : this.getSidePanelSectionsState();
    targetData.view_state.side_panel_sections = Object.assign({}, normalizedSections);
    return targetData;
  }
  // Hotkey handling: normalize combos, detect conflicts, and intercept key events.
  normalizeHotkeyKey(rawKey) {
    return normalizeHotkeyKeyUtil(rawKey);
  }
  normalizeHotkeyText(rawHotkey) {
    return normalizeHotkeyTextUtil(rawHotkey);
  }
  getHotkeyFromKeyboardEvent(keyboardEvent) {
    if (!keyboardEvent || keyboardEvent.repeat) return "";
    return getHotkeyFromKeyboardEventUtil(keyboardEvent);
  }
  getHotkeyCommandIdByHotkey(hotkeyText, ignoreCommandId = "") {
    var _a;
    const normalizedHotkey = this.normalizeHotkeyText(hotkeyText);
    if (!normalizedHotkey) return "";
    for (const commandMeta of HOTKEY_COMMANDS) {
      if (commandMeta.id === ignoreCommandId) continue;
      if (((_a = this.data.hotkeys) == null ? void 0 : _a[commandMeta.id]) === normalizedHotkey) {
        return commandMeta.id;
      }
    }
    return "";
  }
  getHotkeyDisplayName(commandId) {
    const commandMeta = HOTKEY_COMMANDS.find((item) => item.id === commandId);
    return commandMeta ? commandMeta.name : commandId;
  }
  getCommandHotkey(commandId) {
    var _a;
    return this.normalizeHotkeyText(((_a = this.data.hotkeys) == null ? void 0 : _a[commandId]) || "");
  }
  setCommandHotkey(commandId, rawHotkey) {
    if (!HOTKEY_COMMAND_IDS.has(commandId)) return;
    const normalizedHotkey = this.normalizeHotkeyText(rawHotkey);
    if (!normalizedHotkey) {
      this.clearCommandHotkey(commandId);
      return;
    }
    if (!this.data.hotkeys || typeof this.data.hotkeys !== "object") {
      this.data.hotkeys = {};
    }
    this.data.hotkeys[commandId] = normalizedHotkey;
    this.schedulePersist();
  }
  clearCommandHotkey(commandId) {
    var _a;
    if (!((_a = this.data.hotkeys) == null ? void 0 : _a[commandId])) return;
    delete this.data.hotkeys[commandId];
    this.schedulePersist();
  }
  isEditableTarget(targetElement) {
    if (!targetElement || typeof targetElement !== "object") return false;
    if (targetElement.isContentEditable) return true;
    if (typeof targetElement.closest !== "function") return false;
    return !!targetElement.closest('input, textarea, select, [contenteditable="true"]');
  }
  handleCustomHotkeyEvent(keyboardEvent) {
    if (this.isEditableTarget(keyboardEvent.target)) return;
    const hotkeyText = this.getHotkeyFromKeyboardEvent(keyboardEvent);
    if (!hotkeyText) return;
    const commandId = this.getHotkeyCommandIdByHotkey(hotkeyText);
    if (!commandId) return;
    if (commandId !== "graphfrontier-open-view" && !this.getActiveGraphFrontierView()) return;
    keyboardEvent.preventDefault();
    keyboardEvent.stopPropagation();
    this.app.commands.executeCommandById(commandId);
  }
  schedulePersist(delayMs = 250) {
    this._persistRevision = (this._persistRevision || 0) + 1;
    if (this._persistTimer) window.clearTimeout(this._persistTimer);
    const safeDelayMs = this.clampNumber(delayMs, 100, 5e3, 250);
    this._persistTimer = window.setTimeout(() => {
      void this.persistPluginDataOnly();
    }, safeDelayMs);
  }
  getLayoutsFolderRelativePath() {
    var _a, _b, _c;
    const configDir = String(((_b = (_a = this.app) == null ? void 0 : _a.vault) == null ? void 0 : _b.configDir) || ".obsidian").replace(/\/+$/u, "");
    const pluginId = String(((_c = this.manifest) == null ? void 0 : _c.id) || "graphfrontier").trim() || "graphfrontier";
    return `${configDir}/plugins/${pluginId}/layouts`;
  }
  normalizeLayoutFileName(rawLayoutFileName) {
    const fallback = String(DEFAULT_DATA.active_layout_name || "data.json");
    const rawText = String(rawLayoutFileName || "").trim();
    if (!rawText) return fallback;
    const tail = rawText.split(/[\\/]/u).filter(Boolean).pop();
    let fileName = String(tail || "").trim();
    if (!fileName) return fallback;
    fileName = fileName.replace(/[^\w.\- ]/gu, "_").trim();
    if (!fileName) return fallback;
    if (!/\.json$/iu.test(fileName)) fileName = `${fileName}.json`;
    return fileName;
  }
  getActiveLayoutFileName() {
    var _a;
    return this.normalizeLayoutFileName((_a = this.data) == null ? void 0 : _a.active_layout_name);
  }
  async ensureLayoutsFolder() {
    var _a, _b;
    const adapter = (_b = (_a = this.app) == null ? void 0 : _a.vault) == null ? void 0 : _b.adapter;
    if (!adapter || typeof adapter.mkdir !== "function") return;
    const folderPath = this.getLayoutsFolderRelativePath();
    try {
      await adapter.mkdir(folderPath);
    } catch (e) {
    }
  }
  async listLayoutFileNames() {
    var _a, _b;
    const adapter = (_b = (_a = this.app) == null ? void 0 : _a.vault) == null ? void 0 : _b.adapter;
    if (!adapter || typeof adapter.list !== "function") return [];
    const folderPath = this.getLayoutsFolderRelativePath();
    let files = [];
    try {
      const listed = await adapter.list(folderPath);
      files = Array.isArray(listed == null ? void 0 : listed.files) ? listed.files : [];
    } catch (e) {
      return [];
    }
    return files.map(
      (filePath) => String(filePath || "").split(/[\\/]/u).pop()
    ).filter((fileName) => !!fileName && /\.json$/iu.test(fileName)).sort((leftName, rightName) => leftName.localeCompare(rightName));
  }
  getLayoutFileRelativePath(layoutFileName) {
    const fileName = this.normalizeLayoutFileName(layoutFileName);
    return `${this.getLayoutsFolderRelativePath()}/${fileName}`;
  }
  async readLayoutFileData(layoutFileName) {
    var _a, _b;
    const adapter = (_b = (_a = this.app) == null ? void 0 : _a.vault) == null ? void 0 : _b.adapter;
    if (!adapter || typeof adapter.read !== "function") return { status: "error" };
    const filePath = this.getLayoutFileRelativePath(layoutFileName);
    try {
      if (typeof adapter.exists === "function" && await adapter.exists(filePath) === false) {
        return { status: "missing" };
      }
      const rawText = await adapter.read(filePath);
      const parsed = JSON.parse(rawText);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        return { status: "error" };
      }
      return { status: "ok", data: parsed };
    } catch (e) {
      return { status: "error" };
    }
  }
  async writeLayoutFileData(layoutFileName, dataObject) {
    var _a, _b;
    const adapter = (_b = (_a = this.app) == null ? void 0 : _a.vault) == null ? void 0 : _b.adapter;
    if (!adapter || typeof adapter.write !== "function") return false;
    const fileName = this.normalizeLayoutFileName(layoutFileName);
    const filePath = this.getLayoutFileRelativePath(fileName);
    const normalizedData = this.normalizeData(dataObject);
    normalizedData.active_layout_name = fileName;
    if (!normalizedData.view_state || typeof normalizedData.view_state !== "object") {
      normalizedData.view_state = Object.assign({}, DEFAULT_DATA.view_state);
    }
    normalizedData.view_state.side_panel_sections = {};
    try {
      const contents = `${JSON.stringify(normalizedData, null, 2)}
`;
      await this.ensureLayoutsFolder();
      await adapter.write(filePath, contents);
      return true;
    } catch (e) {
      return false;
    }
  }
  async deleteLayoutFile(layoutFileName) {
    var _a, _b, _c, _d, _e, _f;
    const fileName = this.normalizeLayoutFileName(layoutFileName);
    const existingLayoutNames = await this.listLayoutFileNames();
    if (!existingLayoutNames.includes(fileName)) {
      return { ok: false, reason: "not-found" };
    }
    if (existingLayoutNames.length <= 1) {
      return { ok: false, reason: "last-layout" };
    }
    const filePath = this.getLayoutFileRelativePath(fileName);
    const adapter = (_b = (_a = this.app) == null ? void 0 : _a.vault) == null ? void 0 : _b.adapter;
    let removed = false;
    if (adapter && typeof adapter.remove === "function") {
      try {
        await adapter.remove(filePath);
        removed = true;
      } catch (e) {
        removed = false;
      }
    }
    if (!removed) {
      const abstractFile = (_d = (_c = this.app) == null ? void 0 : _c.vault) == null ? void 0 : _d.getAbstractFileByPath(filePath);
      if (abstractFile && typeof ((_f = (_e = this.app) == null ? void 0 : _e.vault) == null ? void 0 : _f.trash) === "function") {
        try {
          await this.app.vault.trash(abstractFile, false);
          removed = true;
        } catch (e) {
          removed = false;
        }
      }
    }
    if (!removed) {
      return { ok: false, reason: "delete-failed" };
    }
    const wasActiveLayout = this.getActiveLayoutFileName() === fileName;
    if (!wasActiveLayout) {
      return {
        ok: true,
        deletedLayoutName: fileName,
        activeLayoutName: this.getActiveLayoutFileName(),
        activeChanged: false
      };
    }
    const remainingLayoutNames = existingLayoutNames.filter((name) => name !== fileName);
    const preferredFallback = this.normalizeLayoutFileName(DEFAULT_DATA.active_layout_name);
    const nextActiveLayoutName = remainingLayoutNames.includes(preferredFallback) ? preferredFallback : remainingLayoutNames[0];
    if (!nextActiveLayoutName) {
      return { ok: false, reason: "no-fallback" };
    }
    const switched = await this.setActiveLayoutFile(nextActiveLayoutName, { loadFromFile: true });
    if (!switched) {
      return { ok: false, reason: "active-switch-failed" };
    }
    return {
      ok: true,
      deletedLayoutName: fileName,
      activeLayoutName: this.getActiveLayoutFileName(),
      activeChanged: true
    };
  }
  async persistPluginDataOnly() {
    const activeLayoutName = this.getActiveLayoutFileName();
    this.data.active_layout_name = activeLayoutName;
    await this.saveData(this.data);
  }
  async persistActiveLayoutFile(data = this.data, layoutName = this.getActiveLayoutFileName()) {
    if (this._layoutReadFailedName === layoutName) return false;
    return this.writeLayoutFileData(layoutName, data);
  }
  // Serialize save commits and full-file reloads, not unrelated UI work.
  runLayoutFileOperation(operation) {
    const pending = (this._layoutFileOperation || Promise.resolve()).then(operation);
    this._layoutFileOperation = pending.catch(() => {
    });
    return pending;
  }
  async bootstrapActiveLayoutData() {
    const activeLayoutName = this.getActiveLayoutFileName();
    const result = await this.readLayoutFileData(activeLayoutName);
    if (result.status === "ok") {
      const normalizedLayoutData = this.normalizeData(result.data);
      normalizedLayoutData.active_layout_name = activeLayoutName;
      this.applySidePanelSectionsState(normalizedLayoutData);
      this.data = normalizedLayoutData;
      this._layoutReadFailedName = null;
      await this.persistPluginDataOnly();
      return true;
    }
    if (result.status !== "missing") {
      this._layoutReadFailedName = activeLayoutName;
      new Notice(`Cannot read layout: ${activeLayoutName}. File left unchanged.`);
      return false;
    }
    this.data.active_layout_name = activeLayoutName;
    const written = await this.persistActiveLayoutFile();
    if (!written) {
      new Notice(`Failed to create layout: ${activeLayoutName}`);
      return false;
    }
    await this.persistPluginDataOnly();
    return true;
  }
  async setActiveLayoutFile(layoutFileName, options = {}) {
    return this.runLayoutFileOperation(async () => {
      const nextLayoutName = this.normalizeLayoutFileName(layoutFileName);
      const shouldLoadFromFile = options.loadFromFile !== false;
      let nextData = this.normalizeData(this.data);
      if (shouldLoadFromFile) {
        const result = await this.readLayoutFileData(nextLayoutName);
        if (result.status !== "ok") return false;
        nextData = this.normalizeData(result.data);
      }
      if (this._persistTimer) {
        window.clearTimeout(this._persistTimer);
        this._persistTimer = null;
      }
      nextData.active_layout_name = nextLayoutName;
      this.applySidePanelSectionsState(nextData);
      try {
        await this.saveData(nextData);
      } catch (e) {
        new Notice("Layout selected, but plugin preferences could not be saved");
      }
      this.applySidePanelSectionsState(nextData);
      this.data = nextData;
      if (shouldLoadFromFile) this._layoutReadFailedName = null;
      return true;
    });
  }
  // Node-state management: pin/grid/orbit modes, strong pull, and painted edges.
  getPin(nodeId) {
    const pin = this.data.pins[nodeId];
    if (!pin || typeof pin !== "object") return null;
    const x = Number(pin.x);
    const y = Number(pin.y);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
    return {
      x,
      y,
      mode: pin.mode === "grid" ? "grid" : "exact"
    };
  }
  isPinned(nodeId) {
    return !!this.data.pins[nodeId];
  }
  getPinMode(nodeId) {
    const pin = this.getPin(nodeId);
    if (!pin) return "exact";
    return pin.mode === "grid" ? "grid" : "exact";
  }
  setPin(nodeId, position, options = {}) {
    const x = Number(position == null ? void 0 : position.x);
    const y = Number(position == null ? void 0 : position.y);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    let nextMode = null;
    if (options.mode === "grid") nextMode = "grid";
    else if (options.mode === "exact") nextMode = "exact";
    if (!nextMode) nextMode = this.getPinMode(nodeId);
    delete this.data.orbit_pins[nodeId];
    this.data.pins[nodeId] = { x, y, mode: nextMode };
    this.schedulePersist();
  }
  removePin(nodeId) {
    if (!this.data.pins[nodeId]) return;
    delete this.data.pins[nodeId];
    this.schedulePersist();
  }
  getOrbitPin(nodeId) {
    var _a;
    const orbitPin = (_a = this.data.orbit_pins) == null ? void 0 : _a[nodeId];
    if (!orbitPin || typeof orbitPin !== "object") return null;
    const anchorId = String(orbitPin.anchor_id || "").trim();
    const radius = Number(orbitPin.radius);
    const angle = Number(orbitPin.angle);
    if (!anchorId || anchorId === nodeId) return null;
    if (!Number.isFinite(radius) || radius <= 0) return null;
    if (!Number.isFinite(angle)) return null;
    return {
      anchor_id: anchorId,
      radius,
      angle
    };
  }
  isOrbitPinned(nodeId) {
    return !!this.getOrbitPin(nodeId);
  }
  setOrbitPin(nodeId, orbitMeta) {
    const anchorId = String((orbitMeta == null ? void 0 : orbitMeta.anchor_id) || "").trim();
    const radius = Number(orbitMeta == null ? void 0 : orbitMeta.radius);
    const angle = Number(orbitMeta == null ? void 0 : orbitMeta.angle);
    if (!anchorId || anchorId === nodeId) return;
    if (!Number.isFinite(radius) || radius <= 0) return;
    if (!Number.isFinite(angle)) return;
    delete this.data.pins[nodeId];
    this.data.orbit_pins[nodeId] = {
      anchor_id: anchorId,
      radius,
      angle
    };
    this.schedulePersist();
  }
  removeOrbitPin(nodeId) {
    var _a;
    if (!((_a = this.data.orbit_pins) == null ? void 0 : _a[nodeId])) return;
    delete this.data.orbit_pins[nodeId];
    this.schedulePersist();
  }
  getNodeLabelSize(nodeId) {
    var _a, _b;
    return (_b = (_a = this.data.node_label_sizes) == null ? void 0 : _a[nodeId]) != null ? _b : null;
  }
  setNodeLabelSize(nodeId, size) {
    var _a, _b;
    if (size !== null && (typeof size !== "number" || !Number.isFinite(size))) return;
    (_b = (_a = this.data).node_label_sizes) != null ? _b : _a.node_label_sizes = {};
    if (size === null) delete this.data.node_label_sizes[nodeId];
    else this.data.node_label_sizes[nodeId] = this.clampNumber(size, 5, 20, 9);
    this.schedulePersist();
    this.renderAllViews();
  }
  getNodeMultiplier(nodeId) {
    const stored = this.data.node_force_multipliers[nodeId];
    const multiplier = this.clampMultiplier(stored);
    return multiplier > 1 ? multiplier : 1;
  }
  isStrongPullNode(nodeId) {
    return !!this.data.strong_pull_nodes[nodeId];
  }
  setNodeMultiplier(nodeId, value, options = {}) {
    const multiplier = this.clampMultiplier(value);
    if (multiplier <= 1) {
      this.clearNodeMultiplier(nodeId);
      return;
    }
    this.data.node_force_multipliers[nodeId] = multiplier;
    if (options.mode === "strong-pull") {
      this.data.strong_pull_nodes[nodeId] = true;
    } else if (options.mode === "manual") {
      delete this.data.strong_pull_nodes[nodeId];
    }
    this.schedulePersist();
  }
  clearNodeMultiplier(nodeId) {
    if (!this.data.node_force_multipliers[nodeId] && !this.data.strong_pull_nodes[nodeId]) return;
    delete this.data.node_force_multipliers[nodeId];
    delete this.data.strong_pull_nodes[nodeId];
    this.schedulePersist();
  }
  applyStrongPullToMarkedNodes() {
    const target = this.clampStrongPullMultiplier(this.data.settings.strong_pull_multiplier);
    for (const nodeId of Object.keys(this.data.strong_pull_nodes)) {
      this.data.node_force_multipliers[nodeId] = target;
    }
    this.schedulePersist();
  }
  getPaintedEdgeColor(nodeId) {
    var _a;
    const colorText = String(((_a = this.data.painted_edge_colors) == null ? void 0 : _a[nodeId]) || "").trim();
    if (!/^#([0-9a-f]{6})$/i.test(colorText)) return null;
    return colorText.toLowerCase();
  }
  setPaintedEdgeColor(nodeId, color) {
    const normalizedColor = this.normalizeGroupColor(color);
    this.data.painted_edge_colors[nodeId] = normalizedColor;
    this.schedulePersist();
  }
  clearPaintedEdgeColor(nodeId) {
    var _a;
    if (!((_a = this.data.painted_edge_colors) == null ? void 0 : _a[nodeId])) return;
    delete this.data.painted_edge_colors[nodeId];
    this.schedulePersist();
  }
  // View sync across all open GraphFrontier tabs (refresh/render/recompute).
  getSettings() {
    return this.data.settings;
  }
  scheduleRefreshAllViews(options = {}) {
    if (!this._pendingRefreshOptions || typeof this._pendingRefreshOptions !== "object") {
      this._pendingRefreshOptions = {};
    }
    const safeOptions = options && typeof options === "object" ? options : {};
    this._pendingRefreshOptions = Object.assign({}, this._pendingRefreshOptions, safeOptions);
    if (this._refreshTimer) window.clearTimeout(this._refreshTimer);
    this._refreshTimer = window.setTimeout(() => {
      const nextOptions = Object.assign({}, this._pendingRefreshOptions);
      this._pendingRefreshOptions = {};
      this.refreshAllViews(nextOptions);
    }, 300);
  }
  refreshAllViews(options = {}) {
    const viewOptions = Object.assign({ keepCamera: true }, options || {});
    const leaves = this.app.workspace.getLeavesOfType(GRAPHFRONTIER_VIEW_TYPE);
    for (const leaf of leaves) {
      const view = leaf == null ? void 0 : leaf.view;
      if (view && typeof view.refreshFromVault === "function") {
        view.refreshFromVault(viewOptions);
      }
    }
  }
  renderAllViews() {
    const leaves = this.app.workspace.getLeavesOfType(GRAPHFRONTIER_VIEW_TYPE);
    for (const leaf of leaves) {
      const view = leaf == null ? void 0 : leaf.view;
      if (view && typeof view.render === "function") {
        view.render();
      }
    }
  }
  recomputeOrbitRadiiAllViews() {
    const leaves = this.app.workspace.getLeavesOfType(GRAPHFRONTIER_VIEW_TYPE);
    for (const leaf of leaves) {
      const view = leaf == null ? void 0 : leaf.view;
      if (view && typeof view.recomputeOrbitRadii === "function") {
        view.recomputeOrbitRadii();
      }
    }
  }
  // Grouping and suggestions: query parsing, metadata indexing, and suggestion output.
  updateGroups(nextGroups) {
    const normalizedGroups = [];
    if (Array.isArray(nextGroups)) {
      for (const rawGroup of nextGroups) {
        if (!rawGroup || typeof rawGroup !== "object") continue;
        const query = String(rawGroup.query || "").trim();
        if (!query) continue;
        const color = this.normalizeGroupColor(rawGroup.color);
        normalizedGroups.push({
          id: typeof rawGroup.id === "string" && rawGroup.id ? rawGroup.id : this.createGroupId(),
          query,
          color,
          enabled: rawGroup.enabled !== false
        });
      }
    }
    this.data.groups = normalizedGroups;
    this.schedulePersist();
    this.renderAllViews();
  }
  normalizeQueryRuleList(nextRules) {
    const normalizedRules = [];
    if (Array.isArray(nextRules)) {
      for (const rawRule of nextRules) {
        if (!rawRule || typeof rawRule !== "object") continue;
        const query = String(rawRule.query || "").trim();
        if (!query) continue;
        normalizedRules.push({
          id: typeof rawRule.id === "string" && rawRule.id ? rawRule.id : this.createGroupId(),
          query,
          enabled: rawRule.enabled !== false
        });
      }
    }
    return normalizedRules;
  }
  updateBlacklist(nextRules) {
    this.data.blacklist = this.normalizeQueryRuleList(nextRules);
    this.schedulePersist();
    this.renderAllViews();
  }
  updateWhitelist(nextRules) {
    this.data.whitelist = this.normalizeQueryRuleList(nextRules);
    this.schedulePersist();
    this.renderAllViews();
  }
  parseGroupQuery(query) {
    const text = String(query || "").trim();
    const plainMatch = /^(name|tag|path|file|line|section)\s*:\s*(.*)$/i.exec(text);
    if (plainMatch) {
      return {
        type: plainMatch[1].toLowerCase(),
        value: String(plainMatch[2] || "").trim()
      };
    }
    const propertyMatch = /^\[([^\]]+)\]\s*:\s*(.*)$/i.exec(text);
    if (propertyMatch) {
      return {
        type: "property",
        propertyKey: String(propertyMatch[1] || "").trim().toLowerCase(),
        value: String(propertyMatch[2] || "").trim()
      };
    }
    return null;
  }
  composeGroupQuery(type, value, propertyKey = "") {
    const cleanType = String(type || "").trim().toLowerCase();
    const cleanValue = String(value || "").trim();
    const cleanPropertyKey = String(propertyKey || "").trim().toLowerCase();
    if (!cleanType || !cleanValue) return "";
    if (cleanType === "property") {
      if (!cleanPropertyKey) return "";
      return `[${cleanPropertyKey}]:${cleanValue}`;
    }
    if (!["name", "tag", "path", "file", "line", "section"].includes(cleanType)) return "";
    return `${cleanType}:${cleanValue}`;
  }
  getGroupSuggestions(query, limit = 30) {
    const suggestions = [];
    const text = String(query || "").trim();
    const index = this.groupSuggestionIndex || this.buildGroupSuggestionIndex(this.app.vault.getMarkdownFiles());
    const addSuggestions = (items, prefix) => {
      const sorted = Array.from(items).sort((a, b) => a.localeCompare(b));
      for (const item of sorted) {
        if (suggestions.length >= limit) break;
        const full = `${prefix}${item}`;
        if (!text || full.toLowerCase().includes(text.toLowerCase())) suggestions.push(full);
      }
    };
    const parsed = this.parseGroupQuery(text);
    if (!parsed) {
      addSuggestions(index.tags, "tag:");
      addSuggestions(index.paths, "path:");
      addSuggestions(index.files, "file:");
      addSuggestions(index.sections, "section:");
      addSuggestions(index.lines, "line:");
      for (const key of Array.from(index.properties.keys()).sort((a, b) => a.localeCompare(b))) {
        addSuggestions(index.properties.get(key) || /* @__PURE__ */ new Set(), `[${key}]:`);
      }
      return suggestions.slice(0, limit);
    }
    if (parsed.type === "tag") addSuggestions(index.tags, "tag:");
    if (parsed.type === "path") addSuggestions(index.paths, "path:");
    if (parsed.type === "file") addSuggestions(index.files, "file:");
    if (parsed.type === "section") addSuggestions(index.sections, "section:");
    if (parsed.type === "line") addSuggestions(index.lines, "line:");
    if (parsed.type === "property") {
      const key = parsed.propertyKey || "";
      const options = index.properties.get(key) || /* @__PURE__ */ new Set();
      addSuggestions(options, `[${key}]:`);
    }
    return suggestions.slice(0, limit);
  }
  getGroupPropertyKeySuggestions(query = "", limit = 40) {
    const text = String(query || "").trim().toLowerCase();
    const index = this.groupSuggestionIndex || this.buildGroupSuggestionIndex(this.app.vault.getMarkdownFiles());
    const keys = Array.from(index.properties.keys()).sort((a, b) => a.localeCompare(b));
    const filtered = [];
    for (const key of keys) {
      if (filtered.length >= limit) break;
      if (!text || key.toLowerCase().includes(text)) filtered.push(key);
    }
    return filtered;
  }
  getGroupValueSuggestions(type, query = "", propertyKey = "", limit = 40) {
    const cleanType = String(type || "").trim().toLowerCase();
    const text = String(query || "").trim().toLowerCase();
    const index = this.groupSuggestionIndex || this.buildGroupSuggestionIndex(this.app.vault.getMarkdownFiles());
    let items = [];
    if (cleanType === "tag") items = Array.from(index.tags);
    else if (cleanType === "path") items = Array.from(index.paths);
    else if (cleanType === "file") items = Array.from(index.files);
    else if (cleanType === "line") items = Array.from(index.lines);
    else if (cleanType === "section") items = Array.from(index.sections);
    else if (cleanType === "property") {
      const cleanKey = String(propertyKey || "").trim().toLowerCase();
      if (!cleanKey) return [];
      items = Array.from(index.properties.get(cleanKey) || []);
    } else {
      return [];
    }
    items.sort((a, b) => String(a).localeCompare(String(b)));
    const filtered = [];
    for (const item of items) {
      if (filtered.length >= limit) break;
      const textItem = String(item || "");
      if (!text || textItem.toLowerCase().includes(text)) filtered.push(textItem);
    }
    return filtered;
  }
  buildGroupSuggestionIndex(markdownFiles) {
    const index = {
      tags: /* @__PURE__ */ new Set(),
      paths: /* @__PURE__ */ new Set(),
      files: /* @__PURE__ */ new Set(),
      sections: /* @__PURE__ */ new Set(),
      lines: /* @__PURE__ */ new Set(),
      properties: /* @__PURE__ */ new Map()
    };
    for (const file of markdownFiles) {
      const meta = this.buildNodeMetaByPath(file.path, file);
      index.paths.add(file.path);
      index.files.add(file.basename);
      for (const tag of meta.tags) index.tags.add(tag);
      for (const section of meta.sections) index.sections.add(section);
      for (const line of meta.lines) index.lines.add(String(line));
      for (const [key, values] of meta.properties.entries()) {
        if (!index.properties.has(key)) index.properties.set(key, /* @__PURE__ */ new Set());
        const bucket = index.properties.get(key);
        for (const value of values) bucket.add(value);
      }
    }
    return index;
  }
  buildNodeMetaByPath(path, abstractFile = null, options = {}) {
    var _a, _b, _c, _d;
    const file = abstractFile || this.app.vault.getAbstractFileByPath(path);
    const forcedAttachment = options && options.isAttachment === true;
    const pathText = String(path || "");
    const fallbackExtMatch = /\.([^.\/]+)$/u.exec(pathText);
    const fallbackExt = fallbackExtMatch ? String(fallbackExtMatch[1] || "").toLowerCase() : "";
    const fileExt = typeof (file == null ? void 0 : file.extension) === "string" ? file.extension.toLowerCase() : "";
    const meta = {
      path,
      fileName: typeof (file == null ? void 0 : file.basename) === "string" ? file.basename : String(path).split("/").pop() || String(path),
      tags: [],
      sections: [],
      lines: [],
      properties: /* @__PURE__ */ new Map(),
      isAttachment: forcedAttachment,
      fileType: fileExt || fallbackExt || (forcedAttachment ? "attachment" : "md")
    };
    if (!file || typeof file.extension !== "string" || file.extension.toLowerCase() !== "md") {
      if (file && typeof file.extension === "string" && file.extension.toLowerCase() !== "md") {
        meta.isAttachment = true;
      }
      if (!meta.fileType) meta.fileType = meta.isAttachment ? "attachment" : "file";
      return meta;
    }
    meta.isAttachment = false;
    meta.fileType = "md";
    const cache = this.app.metadataCache.getFileCache(file) || {};
    const tags = /* @__PURE__ */ new Set();
    if (Array.isArray(cache.tags)) {
      for (const tagObj of cache.tags) {
        if (!tagObj || typeof tagObj.tag !== "string") continue;
        tags.add(tagObj.tag.replace(/^#/, ""));
      }
    }
    const fm = cache.frontmatter && typeof cache.frontmatter === "object" ? cache.frontmatter : {};
    const fmTags = fm.tags;
    if (Array.isArray(fmTags)) {
      for (const tag of fmTags) {
        const text = String(tag || "").replace(/^#/, "").trim();
        if (text) tags.add(text);
      }
    } else if (typeof fmTags === "string") {
      for (const piece of fmTags.split(/[, ]+/)) {
        const text = piece.replace(/^#/, "").trim();
        if (text) tags.add(text);
      }
    }
    meta.tags = Array.from(tags);
    if (Array.isArray(cache.headings)) {
      for (const heading of cache.headings) {
        if (!heading) continue;
        if (typeof heading.heading === "string" && heading.heading.trim()) {
          meta.sections.push(heading.heading.trim());
        }
        const line = Number((_b = (_a = heading == null ? void 0 : heading.position) == null ? void 0 : _a.start) == null ? void 0 : _b.line);
        if (Number.isFinite(line)) meta.lines.push(String(line + 1));
      }
    }
    if (Array.isArray(cache.sections)) {
      for (const section of cache.sections) {
        const line = Number((_d = (_c = section == null ? void 0 : section.position) == null ? void 0 : _c.start) == null ? void 0 : _d.line);
        if (Number.isFinite(line)) meta.lines.push(String(line + 1));
      }
    }
    for (const [rawKey, rawValue] of Object.entries(fm)) {
      const key = String(rawKey || "").trim().toLowerCase();
      if (!key || key === "position") continue;
      if (!meta.properties.has(key)) meta.properties.set(key, []);
      const bucket = meta.properties.get(key);
      if (Array.isArray(rawValue)) {
        for (const item of rawValue) {
          const text = String(item != null ? item : "").trim();
          if (text) bucket.push(text);
        }
      } else {
        const text = String(rawValue != null ? rawValue : "").trim();
        if (text) bucket.push(text);
      }
    }
    const uniqueLines = new Set(meta.lines);
    meta.lines = Array.from(uniqueLines);
    return meta;
  }
  // Graph-data builder: assemble nodes/edges from markdown, links, and filter settings.
  collectGraphData() {
    const settings = this.getSettings();
    const includeAttachments = !settings.hide_attachments;
    const hideOrphans = !!settings.hide_orphans;
    const existingFilesOnly = !!settings.existing_files_only;
    const markdownFiles = this.app.vault.getMarkdownFiles();
    const markdownSet = /* @__PURE__ */ new Set();
    const nodeMap = /* @__PURE__ */ new Map();
    for (const file of markdownFiles) {
      markdownSet.add(file.path);
      nodeMap.set(file.path, {
        id: file.path,
        label: file.basename,
        meta: this.buildNodeMetaByPath(file.path, file, { isAttachment: false })
      });
    }
    const addNodeIfMissing = (nodeId, label, options = {}) => {
      if (nodeMap.has(nodeId)) return;
      nodeMap.set(nodeId, {
        id: nodeId,
        label,
        meta: this.buildNodeMetaByPath(nodeId, null, {
          isAttachment: options.isAttachment === true
        })
      });
    };
    const edgeSet = /* @__PURE__ */ new Set();
    const edges = [];
    const touchedNodeIds = /* @__PURE__ */ new Set();
    const resolved = this.app.metadataCache.resolvedLinks || {};
    for (const [sourcePath, targets] of Object.entries(resolved)) {
      if (!markdownSet.has(sourcePath)) continue;
      if (!targets || typeof targets !== "object") continue;
      for (const targetPath of Object.keys(targets)) {
        if (sourcePath === targetPath) continue;
        const targetAbs = this.app.vault.getAbstractFileByPath(targetPath);
        const targetExists = !!targetAbs && typeof targetAbs.path === "string";
        const targetExt = targetExists && typeof targetAbs.extension === "string" ? targetAbs.extension.toLowerCase() : "";
        const isAttachmentExisting = targetExists && targetExt !== "" && targetExt !== "md";
        const unresolvedExtMatch = /(?:\.([^.\/]+))$/u.exec(targetPath);
        const unresolvedExt = unresolvedExtMatch ? unresolvedExtMatch[1].toLowerCase() : "";
        const isAttachmentUnresolved = !targetExists && unresolvedExt !== "" && unresolvedExt !== "md";
        if (!includeAttachments && (isAttachmentExisting || isAttachmentUnresolved)) continue;
        if (existingFilesOnly && !targetExists) continue;
        const targetIsMarkdown = targetExists ? targetExt === "md" : !isAttachmentUnresolved;
        if (!targetIsMarkdown && !includeAttachments) continue;
        const targetLabel = targetExists && typeof targetAbs.basename === "string" ? targetAbs.basename : targetPath.split("/").pop() || targetPath;
        addNodeIfMissing(targetPath, targetLabel, {
          isAttachment: isAttachmentExisting || isAttachmentUnresolved
        });
        const pair = sourcePath < targetPath ? `${sourcePath}\0${targetPath}` : `${targetPath}\0${sourcePath}`;
        if (edgeSet.has(pair)) continue;
        edgeSet.add(pair);
        edges.push({
          source: sourcePath,
          target: targetPath
        });
        touchedNodeIds.add(sourcePath);
        touchedNodeIds.add(targetPath);
      }
    }
    let nodes = Array.from(nodeMap.values());
    let filteredEdges = edges;
    if (hideOrphans) {
      const keepIds = touchedNodeIds;
      nodes = nodes.filter((node) => keepIds.has(node.id));
      const keepSet = new Set(nodes.map((node) => node.id));
      filteredEdges = edges.filter((edge) => keepSet.has(edge.source) && keepSet.has(edge.target));
    }
    this.groupSuggestionIndex = this.buildGroupSuggestionIndex(markdownFiles);
    return { nodes, edges: filteredEdges };
  }
  // View control: get active GraphFrontier view or open one if missing.
  getActiveGraphFrontierView() {
    var _a, _b;
    const activeLeaf = this.app.workspace.activeLeaf;
    if (((_b = (_a = activeLeaf == null ? void 0 : activeLeaf.view) == null ? void 0 : _a.getViewType) == null ? void 0 : _b.call(_a)) === GRAPHFRONTIER_VIEW_TYPE) {
      return activeLeaf.view;
    }
    const leaf = this.app.workspace.getLeavesOfType(GRAPHFRONTIER_VIEW_TYPE)[0];
    return (leaf == null ? void 0 : leaf.view) || null;
  }
  async openOrRevealGraphFrontierView() {
    var _a, _b, _c;
    const existingLeaf = this.app.workspace.getLeavesOfType(GRAPHFRONTIER_VIEW_TYPE)[0];
    const leaf = existingLeaf || this.app.workspace.getLeaf("tab") || this.app.workspace.getLeaf(true);
    await leaf.setViewState({ type: GRAPHFRONTIER_VIEW_TYPE, active: true });
    this.app.workspace.revealLeaf(leaf);
    const view = leaf == null ? void 0 : leaf.view;
    if (!view || ((_a = view.getViewType) == null ? void 0 : _a.call(view)) !== GRAPHFRONTIER_VIEW_TYPE) return;
    if (typeof view.centerCameraOnActiveFileNode !== "function") return;
    if (view.centerCameraOnActiveFileNode()) {
      (_b = view.render) == null ? void 0 : _b.call(view);
      (_c = view.persistViewState) == null ? void 0 : _c.call(view);
    }
  }
};

/* nosourcemap */