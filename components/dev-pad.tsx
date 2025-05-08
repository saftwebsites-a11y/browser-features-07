"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { Button } from "@/components/ui/button"
import { FileCode, Play, Save, Github, Download, Upload, Plus, Trash2 } from "lucide-react"

interface DevPadProps {
  theme: string
}

export default function DevPad({ theme }: DevPadProps) {
  const [activeTab, setActiveTab] = useState("editor")
  const [files, setFiles] = useState([
    { id: "index.html", name: "index.html", language: "html" },
    { id: "styles.css", name: "styles.css", language: "css" },
    { id: "script.js", name: "script.js", language: "javascript" },
  ])
  const [activeFile, setActiveFile] = useState("index.html")

  const fileContents = {
    "index.html": `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevPad Demo</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1>Welcome to DevPad</h1>
    <p>This is a simple HTML file for demonstration.</p>
    <button id="demo-button">Click Me</button>
  </div>
  <script src="script.js"></script>
</body>
</html>`,
    "styles.css": `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #2c3e50;
}

.container {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}

button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}`,
    "script.js": `document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('demo-button');
  
  button.addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  console.log('Script loaded successfully');
});`,
  }

  return (
    <ResizablePanelGroup
      direction="vertical"
      className={`${theme === "dark" ? "border-t border-zinc-800" : "border-t border-zinc-200"}`}
    >
      <ResizablePanel defaultSize={60}>
        <div className={`h-full ${theme === "dark" ? "bg-zinc-900" : "bg-white"} flex flex-col`}>
          <div className="flex items-center p-2 gap-2 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-1">
                <FileCode className="h-4 w-4" />
                DevPad
              </Button>
              <Button variant="ghost" size="sm">
                <Save className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Play className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            <div
              className={`w-56 ${theme === "dark" ? "bg-zinc-800 border-r border-zinc-700" : "bg-zinc-100 border-r border-zinc-300"} overflow-y-auto`}
            >
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium">Files</h3>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <div className="space-y-1">
                  {files.map((file) => (
                    <Button
                      key={file.id}
                      variant={activeFile === file.id ? "secondary" : "ghost"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setActiveFile(file.id)}
                    >
                      <FileCode className="h-4 w-4 mr-2" />
                      {file.name}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 p-0 ml-auto opacity-0 group-hover:opacity-100 hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation()
                          // Delete file logic would go here
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col overflow-hidden">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
                <TabsList
                  className={`${theme === "dark" ? "bg-zinc-800 border-b border-zinc-700" : "bg-zinc-100 border-b border-zinc-300"} w-full justify-start rounded-none h-9`}
                >
                  <TabsTrigger
                    value="editor"
                    className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
                  >
                    Editor
                  </TabsTrigger>
                  <TabsTrigger
                    value="preview"
                    className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
                  >
                    Preview
                  </TabsTrigger>
                  <TabsTrigger
                    value="terminal"
                    className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
                  >
                    Terminal
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="editor" className="flex-1 p-0">
                  <div
                    className={`h-full ${theme === "dark" ? "bg-zinc-900" : "bg-white"} font-mono text-sm p-4 overflow-auto`}
                  >
                    <pre className="whitespace-pre-wrap">{fileContents[activeFile as keyof typeof fileContents]}</pre>
                  </div>
                </TabsContent>

                <TabsContent value="preview" className="flex-1 p-0">
                  <div className="h-full bg-white">
                    <iframe className="w-full h-full border-0" title="Preview" />
                  </div>
                </TabsContent>

                <TabsContent value="terminal" className="flex-1 p-0">
                  <div
                    className={`h-full ${theme === "dark" ? "bg-black text-green-400" : "bg-zinc-900 text-green-400"} p-4 font-mono text-sm overflow-auto`}
                  >
                    <div className="mb-2">$ npm install</div>
                    <div className="mb-2">Installing dependencies...</div>
                    <div className="mb-2">+ react@18.2.0</div>
                    <div className="mb-2">+ next@14.0.0</div>
                    <div className="mb-2">+ typescript@5.2.2</div>
                    <div className="mb-2">Added 1203 packages in 32s</div>
                    <div className="mb-2">$ _</div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
