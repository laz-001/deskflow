/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "deskflow", "index.html", [
    [ "Building deskflow", "md_doc_2dev_2build.html", [
      [ "More info", "index.html#autotoc_md22", null ],
      [ "Configuration", "md_doc_2dev_2build.html#autotoc_md1", [
        [ "Windows Configuration", "md_doc_2dev_2build.html#autotoc_md2", null ]
      ] ],
      [ "Build", "md_doc_2dev_2build.html#autotoc_md3", null ],
      [ "Install", "md_doc_2dev_2build.html#autotoc_md4", null ],
      [ "Making deskflow packages", "md_doc_2dev_2build.html#autotoc_md5", null ]
    ] ],
    [ "Contributing to Deskflow", "md_doc_2dev_2contributing.html", [
      [ "Read the Full Guidelines", "md_doc_2dev_2contributing.html#autotoc_md7", null ]
    ] ],
    [ "Flash Tutorial - Custom Client", "md_doc_2dev_2flash__tutorial.html", [
      [ "Scenario", "md_doc_2dev_2flash__tutorial.html#autotoc_md9", null ],
      [ "Step 0: Project Structure Setup", "md_doc_2dev_2flash__tutorial.html#autotoc_md10", null ],
      [ "Step 1: Project Setup and Dependencies", "md_doc_2dev_2flash__tutorial.html#autotoc_md11", null ],
      [ "Step 2: Network Connection", "md_doc_2dev_2flash__tutorial.html#autotoc_md12", null ],
      [ "Step 3: Protocol Handshake Implementation", "md_doc_2dev_2flash__tutorial.html#autotoc_md13", null ],
      [ "Step 4: Message Processing Loop", "md_doc_2dev_2flash__tutorial.html#autotoc_md14", null ],
      [ "Step 5: Input Event Handlers", "md_doc_2dev_2flash__tutorial.html#autotoc_md15", null ],
      [ "Step 6: Complete Working Client", "md_doc_2dev_2flash__tutorial.html#autotoc_md16", null ],
      [ "Compilation and Testing", "md_doc_2dev_2flash__tutorial.html#autotoc_md17", [
        [ "Using CMake (Recommended)", "md_doc_2dev_2flash__tutorial.html#autotoc_md18", null ],
        [ "Manual Compilation (Alternative)", "md_doc_2dev_2flash__tutorial.html#autotoc_md19", null ],
        [ "Testing", "md_doc_2dev_2flash__tutorial.html#autotoc_md20", null ]
      ] ],
      [ "Working Client Result", "md_doc_2dev_2flash__tutorial.html#autotoc_md21", null ]
    ] ],
    [ "Protocol Overview", "md_doc_2dev_2protocol.html", [
      [ "Overview", "md_doc_2dev_2protocol.html#autotoc_md24", null ],
      [ "Quick Start for Implementers", "md_doc_2dev_2protocol.html#autotoc_md25", [
        [ "Essential Reading Order", "md_doc_2dev_2protocol.html#autotoc_md26", null ],
        [ "Key Implementation Files", "md_doc_2dev_2protocol.html#autotoc_md27", null ]
      ] ],
      [ "Protocol Architecture", "md_doc_2dev_2protocol.html#autotoc_md28", null ],
      [ "Message Categories", "md_doc_2dev_2protocol.html#autotoc_md29", null ],
      [ "Implementation Checklist", "md_doc_2dev_2protocol.html#autotoc_md30", [
        [ "Basic Client Implementation", "md_doc_2dev_2protocol.html#autotoc_md31", null ],
        [ "Advanced Features", "md_doc_2dev_2protocol.html#autotoc_md32", null ]
      ] ],
      [ "Reference Implementation", "md_doc_2dev_2protocol.html#autotoc_md33", null ],
      [ "Protocol Versions and Compatibility", "md_doc_2dev_2protocol.html#autotoc_md34", null ],
      [ "Common Implementation Patterns", "md_doc_2dev_2protocol.html#autotoc_md35", [
        [ "Connection Lifecycle", "md_doc_2dev_2protocol.html#autotoc_md36", null ],
        [ "Message Handling", "md_doc_2dev_2protocol.html#autotoc_md37", null ]
      ] ],
      [ "Debugging and Troubleshooting", "md_doc_2dev_2protocol.html#autotoc_md38", [
        [ "Common Issues", "md_doc_2dev_2protocol.html#autotoc_md39", null ],
        [ "Debug Tools", "md_doc_2dev_2protocol.html#autotoc_md40", null ]
      ] ],
      [ "Contributing", "md_doc_2dev_2protocol.html#autotoc_md41", null ],
      [ "Support and Resources", "md_doc_2dev_2protocol.html#autotoc_md42", null ]
    ] ],
    [ "Protocol Constraints", "md_doc_2dev_2protocol__constraints.html", [
      [ "Message and Data Size Limits", "md_doc_2dev_2protocol__constraints.html#autotoc_md45", null ],
      [ "TLS Handshake and Security (Protocol v1.4+)", "md_doc_2dev_2protocol__constraints.html#autotoc_md46", null ],
      [ "Key Code and Modifier Mapping", "md_doc_2dev_2protocol__constraints.html#autotoc_md47", null ]
    ] ],
    [ "Protocol State Machine", "md_doc_2dev_2protocol__state__machine.html", [
      [ "States and Transitions", "md_doc_2dev_2protocol__state__machine.html#autotoc_md49", [
        [ "State: Disconnected", "md_doc_2dev_2protocol__state__machine.html#autotoc_md50", null ],
        [ "State: Connecting", "md_doc_2dev_2protocol__state__machine.html#autotoc_md51", null ],
        [ "State: Handshake", "md_doc_2dev_2protocol__state__machine.html#autotoc_md52", null ],
        [ "State: Connected", "md_doc_2dev_2protocol__state__machine.html#autotoc_md53", null ],
        [ "State: Active", "md_doc_2dev_2protocol__state__machine.html#autotoc_md54", null ]
      ] ]
    ] ],
    [ "Protocol Timing/Synch", "md_doc_2dev_2protocol__timing__sync.html", [
      [ "Keep-Alive Mechanism (Protocol v1.3+)", "md_doc_2dev_2protocol__timing__sync.html#autotoc_md56", null ],
      [ "Synchronization on Screen Entry", "md_doc_2dev_2protocol__timing__sync.html#autotoc_md57", null ],
      [ "Handshake Timeout", "md_doc_2dev_2protocol__timing__sync.html#autotoc_md58", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"AboutDialog_8cpp.html",
"CondVar_8h.html",
"Log_8h.html#a8e30ee25bb9b218db18f0805c5063522",
"OSXPowerManager_8h_source.html",
"ServerApp_8h.html",
"XWindowsUtil_8cpp.html#ac7d8d36cbcf5a9f36eece8b6796893b3",
"classArchMultithreadWindows.html#a8ac3f896c1dd4e42ad71fb8913f16973",
"classClientApp.html#a6768423d58b530429cc0142151813b85",
"classDataDownloader.html#ae6eccf7ce19db35c9cfd9edef8c7975a",
"classIDataSocket.html#a816a8e8acafacdb4fd3893bf4d348299",
"classInputFilter_1_1KeyboardBroadcastAction.html#acab818e8b72c86bc28b9554c54bb34e8",
"classMSWindowsDesks.html#a57a9163936a37a68dbc64ee272301729",
"classOSXEventQueueBuffer.html#a5eebaea190840fa46f144a4fa378e9e5",
"classScreen.html#abb9544be6782c8f1b5f19ac9bdde4967",
"classServerProxy.html#a0276fe2944ef99512e2e38495645316caee6b72ff13b45de88418e5a0754aeb02",
"classXArchNetworkAddressInUse.html",
"classXWindowsPowerManager.html#aabe70723eda7ddd7020b1ba4f1d0a3fb",
"classdeskflow_1_1EiScreen.html#ab755096023c150fc99d7455bb9c05205",
"classdeskflow_1_1Screen.html#afb8cb1250b4ba1a45d7a453756d51b18",
"classdeskflow_1_1gui_1_1proxy_1_1QProcessProxy.html#ad039d840a1b29b9caf12706c5aa23233",
"classes.html",
"md_doc_2dev_2build.html#autotoc_md5",
"structArchNetworkBSD_1_1Deps.html#a5b7d0968b6834890722bb436f4d6d3e1"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';