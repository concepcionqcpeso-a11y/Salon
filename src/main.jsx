import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Bell,
  CalendarDays,
  CalendarRange,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Database,
  LayoutGrid,
  LogOut,
  Package,
  RotateCcw,
  Scissors,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Tag,
  TrendingUp,
  UserRound,
  Users,
  WalletCards,
  Wrench,
} from 'lucide-react'
import './index.css'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
  { id: 'master-data', label: 'Manage\nMaster Data', icon: Database },
  { id: 'system', label: 'System and\nSettings', icon: Settings },
  { id: 'reports', label: 'Report &\nAnalytics', icon: Bell },
  { id: 'overview', label: 'Appointment\nOverview', icon: CalendarRange },
]

const dashboardStats = [
  { title: "Today's Appointment", value: '40/50', subtext: 'Confirmed / Available', icon: CalendarDays, tone: 'gold' },
  { title: 'Revenue Today (Est.)', value: '₱ 10,000', subtext: '(+30% from yesterday)', icon: TrendingUp, tone: 'silver' },
  { title: 'Staff on Duty', value: '10/20', subtext: 'Assigned Hairdresser', icon: UserRound, tone: 'silver' },
]

const dashboardRows = [
  { name: 'Mary Joy Dula', service: 'Haircut w/ Blowdry', date: 'Today', time: '2m ago', amount: '₱ 500', method: 'QR Code', result: 'Done' },
  { name: 'Joy Delos Santos', service: 'Brazilian Treatment', date: 'Today', time: '5m ago', amount: '₱ 1,000', method: 'Transfer', result: 'Done' },
  { name: 'Regina Mae Lagarde', service: 'Botox Treatment', date: 'Today', time: '1h ago', amount: '₱ 1,000', method: 'QR Code', result: 'Done' },
  { name: 'Angela Cruz', service: 'Hair Treatment', date: 'Today', time: '2h ago', amount: '₱ 1,500', method: 'Cash', result: 'Done' },
  { name: 'Camille Reyes', service: 'Manicure', date: 'Yesterday', time: '4:30 PM', amount: '₱ 650', method: 'QR Code', result: 'Done' },
  { name: 'Lara Santos', service: 'Pedicure', date: 'Yesterday', time: '3:00 PM', amount: '₱ 800', method: 'Transfer', result: 'Done' },
]

const masterCards = [
  { title: 'Services', subtitle: 'Edit treatment, pricing, and duration', count: 13, icon: Scissors },
  { title: 'Staff / Stylists', subtitle: 'Manage working hours and service assignments', count: 36, icon: UserRound },
  { title: 'Customers', subtitle: 'Configure customer segments and details', count: 24, icon: Users },
  { title: 'Suppliers', subtitle: 'Manage backbar and product vendors', count: 11, icon: Package },
  { title: 'Categories', subtitle: 'Manage hair and nails services offered', count: 15, icon: Tag },
]

const settingsCards = [
  { title: 'Manage Users', subtitle: 'Edit user settings', icon: UserRound },
  { title: 'General Settings', subtitle: 'Customize general system settings', icon: Wrench },
  { title: 'Appointment Settings', subtitle: 'Manage appointment settings', icon: CalendarDays },
  { title: 'Admin Settings', subtitle: 'Customize admin user settings', icon: ShieldCheck },
]

const reportCards = [
  { title: 'Sales Summary', subtitle: 'Shows total sales and revenue trends', icon: TrendingUp },
  { title: 'Appointment Report', subtitle: 'Browse lists completed and upcoming client bookings.', icon: ClipboardList },
  { title: 'Staff Commission Report', subtitle: "Browse details each staff's earnings based on commissions.", icon: WalletCards },
  { title: 'Service Performance', subtitle: 'Browse tracks which services are most popular or profitable.', icon: Star },
]

const overviewCards = [
  { title: 'Appointments', subtitle: 'View all available bookings', icon: CalendarDays },
  { title: 'Appointment Status', subtitle: 'View booking schedules status', icon: ClipboardList },
  { title: 'Reschedules', subtitle: 'View all reschedule request', icon: RotateCcw },
]

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!username.trim() || !password.trim()) {
      setError('Enter a username and password to continue.')
      return
    }
    onLogin(username.trim())
  }

  return (
    <main className="login-screen">
      <section className="login-card">
        <div className="login-brand"><div className="brand-logo-circle"><span>CLIQUE</span></div></div>
        <p className="login-kicker">Salon administration</p>
        <h1>Welcome back</h1>
        <p className="login-copy">Sign in to manage appointments, staff, reports, and salon settings.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>Username<input value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Enter username" /></label>
          <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" /></label>
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">Log In</button>
        </form>
        <p className="login-hint">Frontend demo: any non-empty credentials work.</p>
      </section>
    </main>
  )
}

function SearchField({ value, onChange, placeholder }) {
  return (
    <div className="search-box">
      <Search size={22} />
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    </div>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [identity, setIdentity] = useState('')
  const [activePage, setActivePage] = useState('dashboard')

  if (!isLoggedIn) return <LoginPage onLogin={(name) => { setIdentity(name); setIsLoggedIn(true) }} />

  const handleLogout = () => {
    setIdentity('')
    setIsLoggedIn(false)
    setActivePage('dashboard')
  }

  const renderPage = () => {
    if (activePage === 'dashboard') return <DashboardPage />
    if (activePage === 'master-data') return <MasterDataPage />
    if (activePage === 'system') return <SettingsPage />
    if (activePage === 'reports') return <ReportsPage />
    if (activePage === 'overview') return <AppointmentOverviewPage />
    return <DashboardPage />
  }

  return (
    <div className="admin-app-shell">
      <aside className="sidebar">
        <div className="brand-box">
          <div className="brand-logo-circle"><span>CLIQUE</span></div>
          <div className="brand-meta">
            <div className="brand-name">Jane</div>
            <div className="brand-id">ID: 12345</div>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className={`nav-item ${activePage === id ? 'active' : ''}`}
              onClick={() => setActivePage(id)}
            >
              <span className="nav-icon"><Icon size={20} /></span>
              <span className="nav-label">{label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button type="button" className="footer-item" onClick={() => setActivePage('system')}>
            <UserRound size={18} />
            <span>Account ({identity})</span>
          </button>
          <button type="button" className="footer-item" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      <main className="content-panel">{renderPage()}</main>
    </div>
  )
}

function DashboardPage() {
  const [search, setSearch] = useState('')
  const [showAll, setShowAll] = useState(false)
  const weeklyBars = [72, 95, 48, 68, 82, 58, 74]
  const filteredRows = dashboardRows.filter((row) => `${row.name} ${row.service} ${row.method}`.toLowerCase().includes(search.toLowerCase()))
  const rows = showAll ? filteredRows : filteredRows.slice(0, 3)

  return (
    <>
      <div className="top-header dashboard-header">
        <div className="title-wrap">
          <h1>CLIQUE SALON AND SPA</h1>
          <p>Where everything you need meets you at the best time.</p>
        </div>

        <SearchField value={search} onChange={setSearch} placeholder="Search appointments" />
      </div>

      <div className="stat-row">
        {dashboardStats.map(({ title, value, subtext, icon: Icon, tone }) => (
          <div key={title} className={`stat-card ${tone}`}>
            <div className="stat-card-top">
              <div className="icon-badge"><Icon size={24} /></div>
              <div className="stat-text">
                <h3>{title}</h3>
                <div className="stat-main-line"><span className="value">{value}</span></div>
                <p>{subtext}</p>
              </div>
            </div>
            {title === "Today's Appointment" && <div className="progress"><span /></div>}
          </div>
        ))}
      </div>

      <div className="content-grid dashboard-grid">
        <div className="panel table-panel">
          <div className="panel-header">
            <h2>Appointment</h2>
            <div className="sort">Sort by <span>Recently</span></div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name}>
                  <td>
                    <div className="customer-cell">
                      <span className="customer-name">{row.name}</span>
                      <span className="customer-service">{row.service}</span>
                    </div>
                  </td>
                  <td className="date-cell">{row.date}<br />{row.time}</td>
                  <td className="amount-cell">
                    <span>{row.amount}</span>
                    <small>{row.method}</small>
                  </td>
                  <td className="status-cell"><span className="status-done">{row.result}</span></td>
                </tr>
              ))}
              {!rows.length && <tr><td colSpan="4" className="empty-state">No appointments match your search.</td></tr>}
            </tbody>
          </table>

          <button type="button" className="show-all-btn" onClick={() => setShowAll((current) => !current)}>
            {showAll ? 'Show Recent Transactions' : 'Show All Transactions'}
            <ChevronDown className={showAll ? 'rotated' : ''} size={16} />
          </button>
        </div>

        <div className="panel revenue-panel">
          <h2>Weekly Revenue</h2>
          <div className="bar-chart">
            {weeklyBars.map((value, index) => (
              <div key={index} className="bar-group">
                <div className="bar" style={{ height: `${value}%` }} />
                <span>{['Hair Treatment', 'Rebond', 'Manicure', 'Pedicure'][index % 4]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function MasterDataPage() {
  const [search, setSearch] = useState('')
  const visibleCards = masterCards.filter((card) => `${card.title} ${card.subtitle}`.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <div className="top-header title-only-header">
        <h1>Manage Master Data</h1>
        <p>Core configurations and data sync</p>
      </div>

      <SearchField value={search} onChange={setSearch} placeholder="Search master data" />

      <div className="status-banner">
        <div className="status-icon"><CheckCircle2 size={24} /></div>
        <div>
          <h3>All data up to date</h3>
          <p>Last synced 2 minutes ago</p>
        </div>
      </div>

      <div className="section-block">
        <h2>Core configurations</h2>
        <div className="master-grid">
          {visibleCards.map(({ title, subtitle, count, icon: Icon }) => (
            <div key={title} className="config-card">
              <div className="config-card-inner">
                <div className="config-icon-wrap"><Icon size={30} /></div>
                <div className="config-copy">
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </div>
              </div>
              <span className="count-pill">{count}</span>
            </div>
          ))}
        </div>
      </div>
      {!visibleCards.length && <p className="empty-state">No master data options match your search.</p>}
    </>
  )
}

function SettingsPage() {
  const [search, setSearch] = useState('')
  const visibleCards = settingsCards.filter((card) => `${card.title} ${card.subtitle}`.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <div className="top-header title-only-header">
        <h1>System and Settings</h1>
        <p>Configure settings and manage system controls</p>
      </div>

      <SearchField value={search} onChange={setSearch} placeholder="Search settings" />
      <div className="settings-list">
        {visibleCards.map(({ title, subtitle, icon: Icon }) => (
          <div key={title} className="setting-item">
            <div className="setting-icon"><Icon size={28} /></div>
            <div className="setting-copy">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      {!visibleCards.length && <p className="empty-state">No settings match your search.</p>}
    </>
  )
}

function ReportsPage() {
  const [search, setSearch] = useState('')
  const visibleCards = reportCards.filter((card) => `${card.title} ${card.subtitle}`.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <div className="top-header title-only-header">
        <h1>Reports & Analytics</h1>
        <p>Revenue and transaction trends</p>
      </div>

      <SearchField value={search} onChange={setSearch} placeholder="Search reports and analytics" />

      <div className="status-banner compact-status">
        <div className="status-icon"><CheckCircle2 size={24} /></div>
        <div>
          <h3>All data up to date</h3>
          <p>Last synced 2 minutes ago</p>
        </div>
      </div>

      <div className="report-list">
        {visibleCards.map(({ title, subtitle, icon: Icon }) => (
          <div key={title} className="report-item">
            <div className="report-copy">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
            <div className="report-icon"><Icon size={32} /></div>
          </div>
        ))}
      </div>
      {!visibleCards.length && <p className="empty-state">No reports match your search.</p>}
    </>
  )
}

function AppointmentOverviewPage() {
  const [search, setSearch] = useState('')
  const visibleCards = overviewCards.filter((card) => `${card.title} ${card.subtitle}`.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <div className="top-header title-only-header">
        <h1>Appointment Oversight</h1>
        <p>Appointment/Booking trends</p>
      </div>

      <SearchField value={search} onChange={setSearch} placeholder="Search appointment overview" />

      <div className="status-banner compact-status">
        <div className="status-icon"><CheckCircle2 size={24} /></div>
        <div>
          <h3>All data up to date</h3>
          <p>Last synced 2 minutes ago</p>
        </div>
      </div>

      <div className="overview-list">
        {visibleCards.map(({ title, subtitle, icon: Icon }) => (
          <div key={title} className="overview-item">
            <div className="overview-icon"><Icon size={36} /></div>
            <div className="overview-copy">
              <h3>{title}</h3>
              <p>{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      {!visibleCards.length && <p className="empty-state">No appointment options match your search.</p>}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
