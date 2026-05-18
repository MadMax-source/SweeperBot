'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';
import { ExploreFooter } from '@/components/explore/explore-footer';
import {
  Settings,
  User,
  Bell,
  Shield,
  Wallet,
  Moon,
  Sun,
  Globe,
  Key,
  Eye,
  EyeOff,
  Check,
  ChevronRight,
  Zap,
  Database,
  Mail,
  Smartphone,
  Monitor,
  Volume2,
  VolumeX,
} from 'lucide-react';

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [autoScan, setAutoScan] = useState(true);
  const [showApiKey, setShowApiKey] = useState(false);

  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        enabled ? 'bg-primary' : 'bg-muted'
      }`}
    >
      <div
        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-[220px] flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Settings className="w-6 h-6" />
              Settings
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Manage your account and application preferences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Settings */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                  <User className="w-4 h-4 text-primary" />
                  PROFILE_SETTINGS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/40 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90">
                        Upload Avatar
                      </button>
                      <p className="text-xs text-muted-foreground mt-1">
                        JPG, PNG or GIF. Max 2MB.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Display Name
                      </label>
                      <input
                        type="text"
                        defaultValue="CryptoTrader_42"
                        className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Email</label>
                      <input
                        type="email"
                        defaultValue="trader@example.com"
                        className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Settings */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Bell className="w-4 h-4 text-primary" />
                  NOTIFICATION_SETTINGS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          Email Notifications
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Receive alerts via email
                        </div>
                      </div>
                    </div>
                    <ToggleSwitch
                      enabled={emailNotifications}
                      onChange={() => setEmailNotifications(!emailNotifications)}
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          Push Notifications
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Browser push notifications
                        </div>
                      </div>
                    </div>
                    <ToggleSwitch
                      enabled={pushNotifications}
                      onChange={() => setPushNotifications(!pushNotifications)}
                    />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      {soundEnabled ? (
                        <Volume2 className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <VolumeX className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <div className="text-sm font-medium text-foreground">Sound Alerts</div>
                        <div className="text-xs text-muted-foreground">
                          Play sound for critical alerts
                        </div>
                      </div>
                    </div>
                    <ToggleSwitch
                      enabled={soundEnabled}
                      onChange={() => setSoundEnabled(!soundEnabled)}
                    />
                  </div>
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Shield className="w-4 h-4 text-primary" />
                  SECURITY_SETTINGS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Key className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          Two-Factor Authentication
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Add extra security to your account
                        </div>
                      </div>
                    </div>
                    <button className="px-3 py-1.5 bg-primary text-primary-foreground rounded text-xs font-medium">
                      Enable
                    </button>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Database className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium text-foreground">API Key</div>
                          <div className="text-xs text-muted-foreground">
                            For external integrations
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type={showApiKey ? 'text' : 'password'}
                        defaultValue=""
                        readOnly
                        className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg text-foreground text-sm font-mono"
                      />
                      <button className="px-3 py-2 bg-muted border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Active Sessions</div>
                        <div className="text-xs text-muted-foreground">
                          Manage your active sessions
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 text-primary text-sm hover:underline">
                      View <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Scanning Settings */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-primary" />
                  SCANNING_PREFERENCES
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          Auto-Scan New Tokens
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Automatically scan tokens when detected
                        </div>
                      </div>
                    </div>
                    <ToggleSwitch enabled={autoScan} onChange={() => setAutoScan(!autoScan)} />
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Risk Threshold</div>
                        <div className="text-xs text-muted-foreground">
                          Alert when risk score exceeds threshold
                        </div>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      defaultValue="50"
                      className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Low (0)</span>
                      <span>Medium (50)</span>
                      <span>High (100)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Appearance */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                  {darkMode ? (
                    <Moon className="w-4 h-4 text-primary" />
                  ) : (
                    <Sun className="w-4 h-4 text-primary" />
                  )}
                  APPEARANCE
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => setDarkMode(true)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border ${
                      darkMode ? 'border-primary bg-primary/10' : 'border-border bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Moon className="w-5 h-5" />
                      <span className="text-sm">Dark Mode</span>
                    </div>
                    {darkMode && <Check className="w-4 h-4 text-primary" />}
                  </button>
                  <button
                    onClick={() => setDarkMode(false)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg border ${
                      !darkMode ? 'border-primary bg-primary/10' : 'border-border bg-muted/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Sun className="w-5 h-5" />
                      <span className="text-sm">Light Mode</span>
                    </div>
                    {!darkMode && <Check className="w-4 h-4 text-primary" />}
                  </button>
                </div>
              </div>

              {/* Connected Wallet */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Wallet className="w-4 h-4 text-primary" />
                  CONNECTED_WALLET
                </h3>
                <div className="p-3 bg-muted/30 rounded-lg mb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Phantom</div>
                      <div className="text-xs text-muted-foreground font-mono">So7x...4k2m</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-green-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Connected
                  </div>
                </div>
                <button className="w-full px-3 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors">
                  Disconnect Wallet
                </button>
              </div>

              {/* Language */}
              <div className="bg-card border border-border rounded-lg p-5">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                  <Globe className="w-4 h-4 text-primary" />
                  LANGUAGE
                </h3>
                <select className="w-full px-3 py-2 bg-muted border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="en">English (US)</option>
                  <option value="es">Spanish</option>
                  <option value="zh">Chinese</option>
                  <option value="ja">Japanese</option>
                  <option value="ko">Korean</option>
                </select>
              </div>

              {/* Danger Zone */}
              <div className="bg-card border border-red-500/50 rounded-lg p-5">
                <h3 className="text-sm font-semibold text-red-500 mb-4">DANGER_ZONE</h3>
                <div className="space-y-3">
                  <button className="w-full px-3 py-2 border border-red-500/50 rounded-lg text-sm text-red-500 hover:bg-red-500/10 transition-colors">
                    Clear All Data
                  </button>
                  <button className="w-full px-3 py-2 bg-red-500/20 border border-red-500 rounded-lg text-sm text-red-500 font-medium hover:bg-red-500/30 transition-colors">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExploreFooter />
      </main>
    </div>
  );
}
