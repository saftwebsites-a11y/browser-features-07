"use client"

import { useState, useEffect, useCallback } from "react"
import BrowserHeader from "@/components/browser-header"
import DevTools from "@/components/dev-tools"
import EmailPanel from "@/components/email-panel"
import MainBrowser from "@/components/main-browser"
import Sidebar from "@/components/sidebar"
import SpeedDial from "@/components/speed-dial"
import DevPad from "@/components/dev-pad"
import { useMediaQuery } from "@/hooks/use-media-query"
import LoginForm from "@/components/auth/login-form"
import ProfileSelector from "@/components/auth/profile-selector"
import ProfileCreator from "@/components/auth/profile-creator"
import UserPanel from "@/components/user/user-panel"
import SessionManager from "@/components/auth/session-manager"
import PasswordManager from "@/components/auth/password-manager"
import { UserCircle, KeyRound, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Browser state
  const [activeTab, setActiveTab] = useState("browser")
  const [showDevTools, setShowDevTools] = useState(false)
  const [showEmailPanel, setShowEmailPanel] = useState(false)
  const [showDevPad, setShowDevPad] = useState(false)
  const [currentUrl, setCurrentUrl] = useState("https://vercel.com")
  const [tabs, setTabs] = useState([
    { id: "browser", title: "Vercel", url: "https://vercel.com", favicon: "/favicon.ico" },
  ])
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [theme, setTheme] = useState("dark")

  // Auth state - initialize with a flag to prevent immediate showing of login form
  const [authInitialized, setAuthInitialized] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showProfileSelector, setShowProfileSelector] = useState(false)
  const [showProfileCreator, setShowProfileCreator] = useState(false)
  const [showUserPanel, setShowUserPanel] = useState(false)
  const [showSessionManager, setShowSessionManager] = useState(false)
  const [showPasswordManager, setShowPasswordManager] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [activeProfile, setActiveProfile] = useState<any>(null)

  const isMobile = useMediaQuery("(max-width: 768px)")

  // Handle mobile view
  useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true)
    }
  }, [isMobile])

  // Initialize auth state only once after initial render
  useEffect(() => {
    if (!authInitialized) {
      setAuthInitialized(true)

      // Delay showing login form to avoid render loops
      const timer = setTimeout(() => {
        if (!user && !activeProfile) {
          setShowLoginForm(true)
        }
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [authInitialized, user, activeProfile])

  // Tab management functions
  const addNewTab = useCallback(() => {
    const newTabId = `tab-${tabs.length + 1}`
    setTabs((prevTabs) => [
      ...prevTabs,
      { id: newTabId, title: "New Tab", url: "about:blank", favicon: "/favicon.ico" },
    ])
    setActiveTab(newTabId)
  }, [tabs.length])

  const closeTab = useCallback(
    (tabId: string) => {
      if (tabs.length > 1) {
        const tabIndex = tabs.findIndex((tab) => tab.id === tabId)
        const newTabs = tabs.filter((tab) => tab.id !== tabId)
        setTabs(newTabs)

        // If we're closing the active tab, switch to another tab
        if (activeTab === tabId) {
          const newActiveTab = newTabs[tabIndex === 0 ? 0 : tabIndex - 1]
          setActiveTab(newActiveTab.id)
          setCurrentUrl(newActiveTab.url)
        }
      }
    },
    [tabs, activeTab],
  )

  const updateTabInfo = useCallback(
    (title: string) => {
      setTabs((prevTabs) => prevTabs.map((tab) => (tab.id === activeTab ? { ...tab, url: currentUrl, title } : tab)))
    },
    [activeTab, currentUrl],
  )

  // Auth management functions
  const handleLogin = useCallback((userData: any) => {
    setUser(userData)
    setShowLoginForm(false)

    // Delay showing profile selector to avoid render loops
    setTimeout(() => {
      setShowProfileSelector(true)
    }, 100)
  }, [])

  const handleProfileSelect = useCallback((profile: any) => {
    setActiveProfile(profile)
    setShowProfileSelector(false)
  }, [])

  const handleCreateProfile = useCallback(() => {
    setShowProfileSelector(false)

    // Delay showing profile creator to avoid render loops
    setTimeout(() => {
      setShowProfileCreator(true)
    }, 100)
  }, [])

  const handleSaveProfile = useCallback((profile: any) => {
    setActiveProfile(profile)
    setShowProfileCreator(false)
  }, [])

  const handleLogout = useCallback(() => {
    setUser(null)
    setActiveProfile(null)
    setShowUserPanel(false)

    // Delay showing login form to avoid render loops
    setTimeout(() => {
      setShowLoginForm(true)
    }, 100)
  }, [])

  // Prevent rendering until auth is initialized
  if (!authInitialized) {
    return null
  }

  return (
    <main
      className={`flex flex-col h-screen ${theme === "dark" ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"} overflow-hidden`}
    >
      <BrowserHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUrl={currentUrl}
        setCurrentUrl={setCurrentUrl}
        showDevTools={showDevTools}
        setShowDevTools={setShowDevTools}
        showEmailPanel={showEmailPanel}
        setShowEmailPanel={setShowEmailPanel}
        showDevPad={showDevPad}
        setShowDevPad={setShowDevPad}
        tabs={tabs}
        addNewTab={addNewTab}
        closeTab={closeTab}
        theme={theme}
        setTheme={setTheme}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          collapsed={sidebarCollapsed}
          setShowDevTools={setShowDevTools}
          setShowEmailPanel={setShowEmailPanel}
          setShowDevPad={setShowDevPad}
          theme={theme}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          {activeTab === "home" ? (
            <SpeedDial setCurrentUrl={setCurrentUrl} setActiveTab={setActiveTab} theme={theme} />
          ) : (
            <MainBrowser currentUrl={currentUrl} activeTab={activeTab} updateTabInfo={updateTabInfo} theme={theme} />
          )}

          {showDevTools && <DevTools theme={theme} />}
          {showDevPad && <DevPad theme={theme} />}
        </div>

        {showEmailPanel && <EmailPanel theme={theme} />}
      </div>

      {/* User management floating buttons - only show when user and profile are both set */}
      {user && activeProfile && (
        <div className="fixed bottom-4 right-4 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={() => setShowUserPanel(true)}
          >
            <UserCircle className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={() => setShowPasswordManager(true)}
          >
            <KeyRound className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full"
            onClick={() => setShowSessionManager(true)}
          >
            <Layers className="h-5 w-5" />
          </Button>
        </div>
      )}

      {/* Auth modals - render conditionally to prevent unnecessary updates */}
      {showLoginForm && <LoginForm onLogin={handleLogin} onClose={() => setShowLoginForm(false)} theme={theme} />}

      {showProfileSelector && (
        <ProfileSelector
          onSelect={handleProfileSelect}
          onCreateProfile={handleCreateProfile}
          onClose={() => setShowProfileSelector(false)}
          theme={theme}
        />
      )}

      {showProfileCreator && (
        <ProfileCreator
          onSave={handleSaveProfile}
          onBack={() => {
            setShowProfileCreator(false)
            setTimeout(() => setShowProfileSelector(true), 100)
          }}
          theme={theme}
        />
      )}

      {showUserPanel && (
        <UserPanel user={user} onLogout={handleLogout} onClose={() => setShowUserPanel(false)} theme={theme} />
      )}

      {showSessionManager && (
        <SessionManager
          onCreateSession={(session) => {
            console.log("Created session:", session)
            setShowSessionManager(false)
          }}
          onSelectSession={(session) => {
            console.log("Selected session:", session)
            setShowSessionManager(false)
          }}
          onClose={() => setShowSessionManager(false)}
          theme={theme}
        />
      )}

      {showPasswordManager && <PasswordManager onClose={() => setShowPasswordManager(false)} theme={theme} />}
    </main>
  )
}
