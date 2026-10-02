import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Bell,
  Banknote,
  CalendarDays,
  CalendarRange,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  CreditCard,
  Database,
  LayoutGrid,
  LogOut,
  Package,
  Receipt,
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

const staffAppointments = [
  { id: '001', time: '9:00 AM', customer: 'Mary Joy Dula', service: 'Haircut w/ Blowdry', stylist: 'Luna', amount: 500, status: 'Confirmed' },
  { id: '002', time: '10:00 AM', customer: 'Joy Delos Santos', service: 'Brazilian Treatment', stylist: 'Chloe', amount: 1000, status: 'Confirmed' },
  { id: '003', time: '1:00 PM', customer: 'Regina Mae', service: 'Botox Treatment', stylist: 'Maya', amount: 1000, status: 'Upcoming' },
]

const initialStaffTransactions = [
  { receipt: '001', customer: 'Mary Joy Dula', service: 'Haircut w/ Blowdry', stylist: 'Luna', amount: 500, method: 'GCash' },
  { receipt: '002', customer: 'Regina Mae', service: 'Botox Treatment', stylist: 'Maya', amount: 1000, method: 'Cash' },
]

const staffNavItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
  { id: 'staff-appointments', label: 'Appointments', icon: ClipboardList },
  { id: 'staff-payments', label: 'Payments', icon: Receipt },
  { id: 'staff-transactions', label: 'Transactions', icon: WalletCards },
]

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmedUsername = username.trim()

    if (!trimmedUsername || !password.trim()) {
      setError('Enter a username and password to continue.')
      return
    }

    onLogin(trimmedUsername)
  }

  return (
    <main className="login-screen">
      <section className="login-card">
        <header className="login-card-heading">
          <h1>CLIQUE HAIRCUTTERS</h1>
          <p>Because you deserve more than just a beautiful look — you deserve a moment to relax, recharge, and feel your absolute best.</p>
        </header>
        <img
          className="login-photo"
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
          alt="A client enjoying a salon appointment"
        />
        <form className="login-form" onSubmit={handleSubmit}>
          <label><span>Username</span><input autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Username" /></label>
          <label><span>Password</span><input autoComplete="current-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" /></label>
          <button type="button" className="forgot-password" onClick={() => setError('Please contact your salon administrator to reset your password.')}>Forgot your password?</button>
          {error && <p className="login-error" role="alert">{error}</p>}
          <button type="submit" className="login-button">Sign In</button>
        </form>
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
  const [role, setRole] = useState('admin')
  const [activePage, setActivePage] = useState('dashboard')
  const [staffTransactions, setStaffTransactions] = useState(initialStaffTransactions)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!mobileSidebarOpen) return
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMobileSidebarOpen(false)
      }
    }

    window.addEventListener('pointerdown', handlePointerDown)
    return () => window.removeEventListener('pointerdown', handlePointerDown)
  }, [mobileSidebarOpen])

  if (!isLoggedIn) return <LoginPage onLogin={(name) => { const nextRole = name.toLowerCase() === 'admin' ? 'admin' : 'staff'; setIdentity(name); setRole(nextRole); setIsLoggedIn(true) }} />

  const handleLogout = () => {
    setIdentity('')
    setRole('admin')
    setIsLoggedIn(false)
    setActivePage('dashboard')
    setMobileSidebarOpen(false)
  }

  const renderPage = () => {
    if (role === 'staff') {
      if (activePage === 'staff-appointments') return <StaffAppointmentsPage />
      if (activePage === 'staff-payments') return <StaffPaymentsPage onComplete={(transaction) => setStaffTransactions((current) => [transaction, ...current])} />
      if (activePage === 'staff-transactions') return <StaffTransactionsPage transactions={staffTransactions} />
      return <StaffDashboardPage transactions={staffTransactions} onNavigate={setActivePage} />
    }
    if (activePage === 'dashboard') return <DashboardPage />
    if (activePage === 'master-data') return <MasterDataPage />
    if (activePage === 'system') return <SettingsPage />
    if (activePage === 'reports') return <ReportsPage />
    if (activePage === 'overview') return <AppointmentOverviewPage />
    return <DashboardPage />
  }

  return (
    <div className={`admin-app-shell ${role === 'staff' ? 'staff-app-shell' : ''}`}>
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={mobileSidebarOpen}
        onClick={() => setMobileSidebarOpen((current) => !current)}
      >
        <span className="mobile-menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <aside ref={sidebarRef} className={`sidebar ${mobileSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="brand-box">
          <div className="brand-logo-circle"><span>CLIQUE</span></div>
          <div className="brand-meta">
            <div className="brand-name">{identity}</div>
            <div className="brand-id">{role === 'admin' ? 'ADMIN ACCOUNT' : 'CASHIER ID: 12345'}</div>
          </div>
        </div>

        <div className="mobile-sidebar-content">
          <nav className="nav-list">
            {(role === 'admin' ? navItems : staffNavItems).map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                className={`nav-item ${activePage === id ? 'active' : ''}`}
                onClick={() => {
                  setActivePage(id)
                  setMobileSidebarOpen(false)
                }}
              >
                <span className="nav-icon"><Icon size={20} /></span>
                <span className="nav-label">{label}</span>
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <button type="button" className="footer-item" onClick={() => {
              setActivePage('system')
              setMobileSidebarOpen(false)
            }}>
              <UserRound size={18} />
              <span>Account ({role})</span>
            </button>
            <button type="button" className="footer-item" onClick={handleLogout}>
              <LogOut size={18} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      <main className="content-panel">{renderPage()}</main>
    </div>
  )
}

function StaffTopHeader({ search, onSearch, placeholder }) {
  const currentDate = new Date()
  return (
    <header className="staff-top-header">
      <div className="staff-top-brand">
        <h1>CLIQUE SALON AND SPA</h1>
        <p>where everything you need meets you at the best time.</p>
      </div>
      <div className="staff-top-tools">
        <div className="staff-date-time">
          <span>Date: {currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).toUpperCase()}</span>
          <span>TIME: {currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }).toUpperCase()}</span>
        </div>
        {onSearch && <SearchField value={search} onChange={onSearch} placeholder={placeholder} />}
      </div>
    </header>
  )
}

function StaffDashboardPage({ transactions, onNavigate }) {
  const [search, setSearch] = useState('')
  const todayRevenue = transactions.reduce((total, item) => total + item.amount, 0)
  return (
    <div className="staff-page staff-dashboard-page">
      <StaffTopHeader search={search} onSearch={setSearch} placeholder="Search here" />
      <section className="staff-dashboard-stats">
        <article className="staff-metric-card">
          <CalendarDays size={38} />
          <div><h2>Today’s Appointment</h2><strong>40/50</strong><p>Confirmed / Available</p></div>
          <div className="staff-progress"><span /></div>
        </article>
        <article className="staff-metric-card">
          <Banknote size={38} />
          <div><h2>Revenue Today (Est.)</h2><strong>{formatPeso(todayRevenue || 10000)}</strong><p><span className="staff-gold-text">+30%</span> from Yesterday</p></div>
        </article>
      </section>
      <section className="staff-dashboard-panels">
        <article className="staff-surface staff-dashboard-appointments">
          <header className="staff-panel-heading">
            <div><h2>Today’s Appointment</h2><p>Sort by <button type="button" className="staff-text-button">Recently <ChevronDown size={14} /></button></p></div>
          </header>
          <div className="staff-table-wrap">
            <table className="staff-table staff-compact-table">
              <thead><tr><th>Purpose</th><th>Date</th><th>Amount</th><th>Result</th></tr></thead>
              <tbody>{staffAppointments.filter((item) => `${item.customer} ${item.service}`.toLowerCase().includes(search.toLowerCase())).map((item) => (
                <tr key={item.id}>
                  <td><strong>{item.customer}</strong><small>{item.service}</small></td>
                  <td>Today<small>{item.time}</small></td>
                  <td>{formatPeso(item.amount)}<small>{item.id === '002' ? 'Transfer' : 'QR Code'}</small></td>
                  <td><span className="staff-done"><CheckCircle2 size={13} /> Done</span></td>
                </tr>
              ))}</tbody>
            </table>
          </div>
          <button type="button" className="staff-show-all" onClick={() => onNavigate('staff-transactions')}>Show All Transactions</button>
        </article>
        <article className="staff-surface staff-completed-panel">
          <h2>Completed Transactions</h2>
          <div className="staff-table-wrap">
            <table className="staff-table staff-compact-table">
              <thead><tr><th>Receipt ID</th><th>Name/ID</th><th>Amount</th></tr></thead>
              <tbody>{transactions.slice(0, 4).map((item) => (
                <tr key={item.receipt}><td>{item.receipt}</td><td>{item.customer}</td><td>{formatPeso(item.amount)}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  )
}

function StaffAppointmentsPage() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Today')
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const filtered = staffAppointments.filter((appointment) => {
    const matchesQuery = `${appointment.customer} ${appointment.service} ${appointment.stylist}`.toLowerCase().includes(search.toLowerCase())
    const matchesFilter = filter === 'Today' || (filter === 'Upcoming' && appointment.status === 'Upcoming')
    return matchesQuery && matchesFilter
  })
  return (
    <div className="staff-page">
      <StaffTopHeader />
      <section className="staff-title-bar">
        <h1>Appointments</h1>
        <SearchField value={search} onChange={setSearch} placeholder="Search Customer" />
      </section>
      <section className="staff-surface staff-appointments-panel">
        <header className="staff-appointments-heading">
          <div><h2>Today’s Appointment</h2><div className="staff-tabs">{['Today', 'Upcoming', 'Past'].map((tab) => <button type="button" key={tab} className={filter === tab ? 'active' : ''} onClick={() => setFilter(tab)}>{tab}</button>)}</div></div>
          <div className="staff-sort-label">Sort by <button type="button" className="staff-text-button">Recently <ChevronDown size={14} /></button></div>
        </header>
        <div className="staff-table-wrap staff-appointments-table-wrap">
          <table className="staff-table">
            <thead><tr><th>Time</th><th>Customer</th><th>Service</th><th>Stylist</th><th>Service Fee</th><th>Action</th></tr></thead>
            <tbody>{filtered.map((item) => (
              <tr key={item.id}>
                <td>{item.time}</td><td><strong>{item.customer}</strong></td><td>{item.service}</td><td><strong>{item.stylist}</strong></td><td>{formatPeso(item.amount)}</td>
                <td><button type="button" className="staff-gold-button staff-view-button" onClick={() => setSelectedAppointment(item)}>View</button></td>
              </tr>
            ))}
            {!filtered.length && <tr><td colSpan="6" className="staff-empty-cell">No appointments found.</td></tr>}
            {filter === 'Past' && filtered.length > 0 && null}
          </tbody></table>
        </div>
      </section>
      {selectedAppointment && <div className="staff-modal-backdrop" role="presentation" onClick={() => setSelectedAppointment(null)}><section className="staff-detail-modal" role="dialog" aria-modal="true" aria-labelledby="staff-appointment-detail" onClick={(event) => event.stopPropagation()}><button className="staff-modal-close" type="button" onClick={() => setSelectedAppointment(null)} aria-label="Close appointment details">×</button><p className="detail-kicker">Appointment {selectedAppointment.id}</p><h2 id="staff-appointment-detail">{selectedAppointment.customer}</h2><dl><div><dt>Time</dt><dd>{selectedAppointment.time}</dd></div><div><dt>Service</dt><dd>{selectedAppointment.service}</dd></div><div><dt>Stylist</dt><dd>{selectedAppointment.stylist}</dd></div><div><dt>Service fee</dt><dd>{formatPeso(selectedAppointment.amount)}</dd></div></dl></section></div>}
    </div>
  )
}

function StaffPaymentsPage({ onComplete }) {
  const [selected, setSelected] = useState(staffAppointments[0])
  const [method, setMethod] = useState('Cash')
  const [received, setReceived] = useState('')
  const [message, setMessage] = useState('')
  const paymentOptions = [staffAppointments[0], staffAppointments[2]]
  const receivedAmount = Number(received) || 0
  const change = Math.max(0, receivedAmount - selected.amount)

  const completePayment = () => {
    if (method === 'Cash' && receivedAmount < selected.amount) {
      setMessage('Enter an amount that covers the service fee.')
      return
    }
    onComplete({
      receipt: String(Date.now()).slice(-3),
      customer: selected.customer,
      service: selected.service,
      stylist: selected.stylist,
      amount: selected.amount,
      method: method === 'Cash' ? 'Cash' : 'GCash',
    })
    setMessage(`Payment completed for ${selected.customer}.`)
    setReceived('')
  }

  return (
    <div className="staff-page">
      <StaffTopHeader />
      <section className="staff-title-bar staff-payment-title"><h1>Payments</h1></section>
      <section className="staff-payment-layout">
        <div className="staff-payment-customer-list">
          {paymentOptions.map((appointment) => <button type="button" key={appointment.id} className={`staff-payment-customer ${selected.id === appointment.id ? 'active' : ''}`} onClick={() => { setSelected(appointment); setMessage(''); setReceived('') }}><span><strong>{appointment.customer}</strong><small>{appointment.service} · {formatPeso(appointment.amount)}</small></span>{appointment.id === '001' ? <Scissors size={38} /> : <UserRound size={38} />}</button>)}
        </div>
        <article className="staff-payment-card">
          <div className="staff-payment-customer-summary"><strong>{selected.customer}</strong><span>{selected.service} · {selected.stylist}</span></div>
          <div className="staff-payment-line"><span>Service fee</span><strong>{formatPeso(selected.amount)}</strong></div>
          <div className="staff-payment-line staff-payment-total"><span>Total</span><strong>{formatPeso(selected.amount)}</strong></div>
          <p className="staff-payment-method-label">PAYMENT METHOD</p>
          <div className="staff-method-options">
            <button type="button" className={method === 'Cash' ? 'active' : ''} onClick={() => { setMethod('Cash'); setMessage('') }}><Banknote size={25} />Cash</button>
            <button type="button" className={method === 'GCash' ? 'active' : ''} onClick={() => { setMethod('GCash'); setMessage('') }}><CreditCard size={25} />GCash</button>
          </div>
          <div className="staff-cash-row">
            <label>Amount received<input inputMode="decimal" type="number" min="0" value={received} onChange={(event) => { setReceived(event.target.value); setMessage('') }} placeholder={method === 'Cash' ? '0' : formatPeso(selected.amount)} disabled={method === 'GCash'} /></label>
            <div className="staff-change">Change<strong>{formatPeso(method === 'Cash' ? change : 0)}</strong></div>
          </div>
          {message && <p className={`staff-payment-message ${message.startsWith('Payment') ? 'success' : ''}`} role="status">{message}</p>}
          <button type="button" className="staff-gold-button staff-complete-payment" onClick={completePayment}><Check size={17} /> Complete payment</button>
        </article>
      </section>
    </div>
  )
}

function StaffTransactionsPage({ transactions }) {
  const [search, setSearch] = useState('')
  const [method, setMethod] = useState('All Payment Methods')
  const visibleTransactions = transactions.filter((transaction) => {
    const matchesSearch = `${transaction.receipt} ${transaction.customer} ${transaction.service} ${transaction.stylist}`.toLowerCase().includes(search.toLowerCase())
    return matchesSearch && (method === 'All Payment Methods' || transaction.method === method)
  })
  const total = transactions.reduce((sum, item) => sum + item.amount, 0)
  const cashTotal = transactions.filter((item) => item.method === 'Cash').reduce((sum, item) => sum + item.amount, 0)
  const gcashTotal = transactions.filter((item) => item.method === 'GCash').reduce((sum, item) => sum + item.amount, 0)
  return (
    <div className="staff-page staff-transactions-page">
      <StaffTopHeader />
      <section className="staff-title-bar staff-transactions-title"><h1>Transactions</h1><select aria-label="Transaction date range" defaultValue="Today"><option>Today</option><option>This week</option><option>This month</option></select></section>
      <section className="staff-transaction-stats">
        <article><TrendingUp size={34} /><div><h2>TOTAL REVENUE</h2><strong>{formatPeso(total)}</strong></div></article>
        <article><Banknote size={34} /><div><h2>CASH</h2><strong>{formatPeso(cashTotal)}</strong></div></article>
        <article><CreditCard size={34} /><div><h2>GCASH</h2><strong>{formatPeso(gcashTotal)}</strong></div></article>
      </section>
      <section className="staff-surface staff-transactions-panel">
        <div className="staff-transaction-filters"><SearchField value={search} onChange={setSearch} placeholder="Search" /><select value={method} onChange={(event) => setMethod(event.target.value)} aria-label="Filter by payment method"><option>All Payment Methods</option><option>Cash</option><option>GCash</option></select></div>
        <div className="staff-table-wrap">
          <table className="staff-table">
            <thead><tr><th>Receipt</th><th>Customer</th><th>Service</th><th>Stylist</th><th>Service Fee</th><th>Payment Method</th></tr></thead>
            <tbody>{visibleTransactions.map((item) => <tr key={item.receipt}><td>{item.receipt}</td><td><strong>{item.customer}</strong></td><td>{item.service}</td><td><strong>{item.stylist}</strong></td><td>{formatPeso(item.amount)}</td><td>{item.method}</td></tr>)}
              {!visibleTransactions.length && <tr><td colSpan="6" className="staff-empty-cell">No transactions match your filters.</td></tr>}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

function formatPeso(amount) {
  return `₱ ${Number(amount).toLocaleString('en-PH')}`
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
