"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

interface DevToolsProps {
  theme: string
}

export default function DevTools({ theme }: DevToolsProps) {
  const [activeDevTab, setActiveDevTab] = useState("console")

  return (
    <ResizablePanelGroup
      direction="vertical"
      className={`${theme === "dark" ? "border-t border-zinc-800" : "border-t border-zinc-200"}`}
    >
      <ResizablePanel defaultSize={40}>
        <div className={`h-full ${theme === "dark" ? "bg-zinc-900" : "bg-white"}`}>
          <Tabs value={activeDevTab} onValueChange={setActiveDevTab} className="h-full">
            <TabsList
              className={`${theme === "dark" ? "bg-zinc-800 border-b border-zinc-700" : "bg-zinc-100 border-b border-zinc-200"} w-full justify-start rounded-none h-9`}
            >
              <TabsTrigger
                value="elements"
                className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
              >
                Elements
              </TabsTrigger>
              <TabsTrigger
                value="console"
                className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
              >
                Console
              </TabsTrigger>
              <TabsTrigger
                value="network"
                className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
              >
                Network
              </TabsTrigger>
              <TabsTrigger
                value="performance"
                className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
              >
                Performance
              </TabsTrigger>
              <TabsTrigger
                value="application"
                className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
              >
                Performance
              </TabsTrigger>
              <TabsTrigger
                value="application"
                className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
              >
                Application
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
              >
                Security
              </TabsTrigger>
              <TabsTrigger
                value="api"
                className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
              >
                API Monitor
              </TabsTrigger>
              <TabsTrigger
                value="github"
                className={`${theme === "dark" ? "data-[state=active]:bg-zinc-700" : "data-[state=active]:bg-zinc-200"} h-8`}
              >
                GitHub
              </TabsTrigger>
            </TabsList>

            <TabsContent value="console" className="p-0 h-[calc(100%-36px)]">
              <div
                className={`${theme === "dark" ? "bg-black text-green-400" : "bg-zinc-900 text-green-400"} p-4 font-mono text-sm h-full overflow-auto`}
              >
                <div className="mb-2">&gt; console.log("Hello Evo Browser")</div>
                <div className={`${theme === "dark" ? "text-white" : "text-zinc-100"} mb-2`}>Hello Evo Browser</div>
                <div className="mb-2">&gt; fetch("https://api.example.com/data")</div>
                <div className={`${theme === "dark" ? "text-white" : "text-zinc-100"} mb-2`}>Promise {"{}"} </div>
                <div className="mb-2">
                  &gt; const data = await fetch("https://api.example.com/data").then(r =&gt; r.json())
                </div>
                <div className="mb-2">&gt; console.log(data)</div>
                <div className={`${theme === "dark" ? "text-white" : "text-zinc-100"} mb-2`}>
                  {`{
  "status": "success",
  "data": {
    "users": 1024,
    "projects": 256,
    "deployments": 512
  }
}`}
                </div>
                <div className="mb-2">&gt; _</div>
              </div>
            </TabsContent>

            <TabsContent value="elements" className="p-0 h-[calc(100%-36px)]">
              <div className={`h-full ${theme === "dark" ? "bg-zinc-900" : "bg-white"} p-4 text-sm overflow-auto`}>
                <div className="text-blue-400">&lt;html&gt;</div>
                <div className="pl-4 text-blue-400">&lt;head&gt;...&lt;/head&gt;</div>
                <div className="pl-4 text-blue-400">&lt;body&gt;</div>
                <div className="pl-8 text-blue-400">&lt;div class="container"&gt;</div>
                <div className="pl-12 text-blue-400">&lt;header&gt;...&lt;/header&gt;</div>
                <div className="pl-12 text-blue-400">&lt;main&gt;</div>
                <div className="pl-16 text-blue-400">&lt;section class="hero"&gt;...&lt;/section&gt;</div>
                <div className="pl-16 text-blue-400">&lt;section class="features"&gt;...&lt;/section&gt;</div>
                <div className="pl-12 text-blue-400">&lt;/main&gt;</div>
                <div className="pl-12 text-blue-400">&lt;footer&gt;...&lt;/footer&gt;</div>
                <div className="pl-8 text-blue-400">&lt;/div&gt;</div>
                <div className="pl-4 text-blue-400">&lt;/body&gt;</div>
                <div className="text-blue-400">&lt;/html&gt;</div>
              </div>
            </TabsContent>

            <TabsContent value="network" className="p-0 h-[calc(100%-36px)]">
              <div className={`h-full ${theme === "dark" ? "bg-zinc-900" : "bg-white"} p-4 text-sm overflow-auto`}>
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className={`border-b ${theme === "dark" ? "border-zinc-700" : "border-zinc-300"}`}>
                      <th className="p-2">Name</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Type</th>
                      <th className="p-2">Size</th>
                      <th className="p-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-b ${theme === "dark" ? "border-zinc-800" : "border-zinc-200"}`}>
                      <td className="p-2 text-blue-400">index.html</td>
                      <td className="p-2 text-green-400">200</td>
                      <td className="p-2">document</td>
                      <td className="p-2">15.2 KB</td>
                      <td className="p-2">45 ms</td>
                    </tr>
                    <tr className={`border-b ${theme === "dark" ? "border-zinc-800" : "border-zinc-200"}`}>
                      <td className="p-2 text-blue-400">main.js</td>
                      <td className="p-2 text-green-400">200</td>
                      <td className="p-2">script</td>
                      <td className="p-2">156 KB</td>
                      <td className="p-2">78 ms</td>
                    </tr>
                    <tr className={`border-b ${theme === "dark" ? "border-zinc-800" : "border-zinc-200"}`}>
                      <td className="p-2 text-blue-400">styles.css</td>
                      <td className="p-2 text-green-400">200</td>
                      <td className="p-2">stylesheet</td>
                      <td className="p-2">32 KB</td>
                      <td className="p-2">25 ms</td>
                    </tr>
                    <tr className={`border-b ${theme === "dark" ? "border-zinc-800" : "border-zinc-200"}`}>
                      <td className="p-2 text-blue-400">api/data</td>
                      <td className="p-2 text-green-400">200</td>
                      <td className="p-2">fetch</td>
                      <td className="p-2">4.5 KB</td>
                      <td className="p-2">120 ms</td>
                    </tr>
                    <tr className={`border-b ${theme === "dark" ? "border-zinc-800" : "border-zinc-200"}`}>
                      <td className="p-2 text-blue-400">logo.svg</td>
                      <td className="p-2 text-green-400">200</td>
                      <td className="p-2">image</td>
                      <td className="p-2">5.8 KB</td>
                      <td className="p-2">18 ms</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="api" className="p-0 h-[calc(100%-36px)]">
              <div className={`h-full ${theme === "dark" ? "bg-zinc-900" : "bg-white"} p-4 text-sm overflow-auto`}>
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">API Endpoints</h3>
                  <div className="grid gap-2">
                    <div
                      className={`p-2 border rounded-md ${theme === "dark" ? "border-zinc-700" : "border-zinc-300"}`}
                    >
                      <div className="flex items-center">
                        <span className="px-2 py-1 bg-green-900 text-green-400 rounded text-xs mr-2">GET</span>
                        <span className="text-blue-400">/api/users</span>
                        <span className="ml-auto text-green-400 text-xs">200 OK</span>
                      </div>
                      <div className={`mt-2 text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                        Last called: 2 minutes ago
                      </div>
                      <div className={`mt-1 text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                        Response time: 45ms
                      </div>
                    </div>

                    <div
                      className={`p-2 border rounded-md ${theme === "dark" ? "border-zinc-700" : "border-zinc-300"}`}
                    >
                      <div className="flex items-center">
                        <span className="px-2 py-1 bg-blue-900 text-blue-400 rounded text-xs mr-2">POST</span>
                        <span className="text-blue-400">/api/auth/login</span>
                        <span className="ml-auto text-green-400 text-xs">200 OK</span>
                      </div>
                      <div className={`mt-2 text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                        Last called: 5 minutes ago
                      </div>
                      <div className={`mt-1 text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                        Response time: 120ms
                      </div>
                    </div>

                    <div
                      className={`p-2 border rounded-md ${theme === "dark" ? "border-zinc-700" : "border-zinc-300"}`}
                    >
                      <div className="flex items-center">
                        <span className="px-2 py-1 bg-green-900 text-green-400 rounded text-xs mr-2">GET</span>
                        <span className="text-blue-400">/api/projects</span>
                        <span className="ml-auto text-green-400 text-xs">200 OK</span>
                      </div>
                      <div className={`mt-2 text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                        Last called: 1 minute ago
                      </div>
                      <div className={`mt-1 text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                        Response time: 65ms
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="github" className="p-0 h-[calc(100%-36px)]">
              <div className={`h-full ${theme === "dark" ? "bg-zinc-900" : "bg-white"} p-4 text-sm overflow-auto`}>
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">GitHub Integration</h3>
                  <div className="grid gap-4">
                    <div
                      className={`p-3 border rounded-md ${theme === "dark" ? "border-zinc-700" : "border-zinc-300"}`}
                    >
                      <h4 className="font-medium mb-2">Recent Repositories</h4>
                      <ul className="grid gap-2">
                        <li className="flex items-center">
                          <span className="text-blue-400">user/project-name</span>
                          <span className={`ml-auto text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                            Updated 2h ago
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-blue-400">user/another-project</span>
                          <span className={`ml-auto text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                            Updated 1d ago
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-blue-400">organization/shared-lib</span>
                          <span className={`ml-auto text-xs ${theme === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
                            Updated 3h ago
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div
                      className={`p-3 border rounded-md ${theme === "dark" ? "border-zinc-700" : "border-zinc-300"}`}
                    >
                      <h4 className="font-medium mb-2">Recent Pull Requests</h4>
                      <ul className="grid gap-2">
                        <li className="flex items-center">
                          <span className="text-blue-400">#123: Fix navigation bug</span>
                          <span className="ml-auto text-green-400 text-xs">Open</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-blue-400">#122: Add new feature</span>
                          <span className="ml-auto text-purple-400 text-xs">Review</span>
                        </li>
                        <li className="flex items-center">
                          <span className="text-blue-400">#121: Update dependencies</span>
                          <span className="ml-auto text-blue-400 text-xs">Merged</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
