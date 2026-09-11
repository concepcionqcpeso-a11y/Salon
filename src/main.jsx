import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CalendarDays,
  CreditCard,
  LogOut,
  Menu,
  Scissors,
  Sparkles,
  Settings,
  TrendingUp,
  UserRound,
  X,
} from 'lucide-react'
import './index.css'

const appointments = [
  { id: 1, customer: 'Sarah M.', service: 'Signature cut & finish', stylist: 'with Mara', date: 'Thu, Sep 17', time: '10:30 AM', status: 'Confirmed', downpayment: 2250, total: 7500 },
  { id: 2, customer: 'Jessica R.', service: 'Gloss refresh', stylist: 'with Noor', date: 'Sat, Oct 24', time: '2:00 PM', status: 'Confirmed', downpayment: 1500, total: 5000 },
  { id: 3, customer: 'Maria L.', service: 'Full color service', stylist: 'with Mara', date: 'Fri, Sep 15', time: '11:00 AM', status: 'Pending', downpayment: 4500, total: 15000 },
  { id: 4, customer: 'Emma T.', service: 'Styling session', stylist: 'with Noor', date: 'Wed, Sep 13', time: '3:30 PM', status: 'Completed', downpayment: 1200, total: 4000 },
]

const services = [
  { id: 1, name: 'Signature cut & finish', duration: '60 min', price: 7500 },
  { id: 2, name: 'Gloss refresh', duration: '45 min', price: 5000 },
  { id: 3, name: 'Full color service', duration: '120 min', price: 15000 },
  { id: 4, name: 'Styling session', duration: '30 min', price: 4000 },
  { id: 5, name: 'Scalp treatment', duration: '45 min', price: 6000 },
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
]

const formatPeso = (value) => `₱${Number(value).toLocaleString('en-PH')}`

function Brand({ light = false }) {
  return (
    <div className={`brand-wrap ${light ? 'brand-wrap-light text-white' : 'text-forest'}`}>
      <div className="brand-mark">
        <Scissors size={17} strokeWidth={1.7} />
      </div>
      <div>
        <p className="brand-title">Hearth & Halo</p>
        <p className="brand-subtitle">Hair studio</p>
      </div>
    </div>
  )
}

function Login({ onLogin }) {
  const [step, setStep] = useState('role')
  const [role, setRole] = useState(null)
  const [form, setForm] = useState({ identity: '', password: '' })
  const [error, setError] = useState('')

  if (step === 'role') {
    return (
      <main className="min-h-screen bg-sage px-5 py-6 text-forest sm:px-8">
        <header className="mx-auto max-w-7xl mb-16">
          <Brand />
        </header>
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Welcome to Hearth & Halo</p>
            <h1 className="mt-6 font-display text-5xl tracking-tight">Portal Login</h1>
            <p className="mt-4 text-base leading-7 text-forest/60">Select your account type to continue.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { value: 'cashier', title: 'Cashier', icon: CreditCard, desc: 'Process payments & manage transactions' },
              { value: 'manager', title: 'Manager', icon: BarChart3, desc: 'Monitor operations & view reports' },
            ].map((r) => (
              <button
                key={r.value}
                onClick={() => {
                  setRole(r.value)
                  setStep('credentials')
                }}
                className="role-card rounded-3xl p-6 text-center transition-all hover:-translate-y-0.5 hover:border-coral hover:bg-coral/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint/60 text-forest mx-auto">
                  <r.icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg">{r.title}</h3>
                <p className="mt-2 text-sm text-forest/60">{r.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </main>
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.identity.trim() || !form.password) {
      setError('Enter your email and password to continue.')
      return
    }
    if (form.password.length < 6) {
      setError('Your password must be at least 6 characters.')
      return
    }
    setError('')
    onLogin(role, form.identity.trim())
  }

  return (
    <main className="min-h-screen bg-sage px-5 py-6 text-forest sm:px-8">
      <header className="mx-auto max-w-7xl">
        <Brand />
      </header>
      <div className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:py-8">
        <section className="relative overflow-hidden rounded-4xl bg-forest px-7 py-12 text-white sm:px-12 sm:py-16 lg:min-h-155 lg:px-16 lg:py-20">
          <div className="relative z-10 flex h-full flex-col justify-between gap-20">
            <div className="max-w-lg animate-rise">
              <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-mint"><Sparkles size={14} /> A softer kind of salon visit</p>
              <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl">Make time for your own shine.</h1>
              <p className="mt-7 max-w-sm text-base leading-7 text-white/70">Your little corner for appointments, rituals, and the people who know your hair best.</p>
            </div>
            <div className="flex items-end justify-between gap-6 border-t border-white/15 pt-6 text-xs text-white/60">
              <p>Est. 2019<br /><span className="text-white/90">Brooklyn · NY</span></p>
              <p className="max-w-40 text-right">Thoughtful hair care for every version of you.</p>
            </div>
          </div>
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full border border-mint/25" />
          <div className="absolute -bottom-2 -right-2 h-40 w-40 rounded-full border border-mint/20" />
        </section>

        <section className="mx-auto w-full max-w-md animate-rise [animation-delay:120ms]">
          <button onClick={() => setStep('role')} className="mb-6 flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3">
            <ArrowLeft size={16} /> Back to roles
          </button>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Sign in as {role}</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">Welcome back</h2>
          <p className="mt-4 text-sm leading-6 text-forest/60">Enter your credentials to continue.</p>
          <form className="mt-10 space-y-5" onSubmit={handleSubmit} noValidate>
            <label className="block text-sm font-medium">
              Email or username
              <input className="field mt-2" type="text" value={form.identity} onChange={(event) => setForm({ ...form, identity: event.target.value })} placeholder="you@example.com" autoComplete="username" />
            </label>
            <label className="block text-sm font-medium">
              Password
              <input className="field mt-2" type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} placeholder="••••••••" autoComplete="current-password" />
            </label>
            {error && <p className="text-sm font-medium text-coral" role="alert">{error}</p>}
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-forest/60"><input type="checkbox" className="accent-coral" /> Remember me</label>
              <button type="button" className="font-semibold text-coral hover:underline">Forgot password?</button>
            </div>
            <button className="button-primary group w-full" type="submit">Sign in <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
          </form>
          <p className="mt-8 text-center text-sm text-forest/60">New to Hearth & Halo? <button className="font-semibold text-coral hover:underline">Create an account</button></p>
        </section>
      </div>
    </main>
  )
}

function AppointmentCard({ appointment }) {
  return (
    <article className="flex flex-col gap-5 border-b border-forest/10 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint/60 text-forest"><CalendarDays size={19} /></div>
        <div><h3 className="font-display text-xl">{appointment.service}</h3><p className="mt-1 text-sm text-forest/55">{appointment.stylist}</p></div>
      </div>
      <div className="flex items-center gap-5 pl-15 text-sm sm:pl-0"><div><p className="font-semibold">{appointment.date}</p><p className="mt-1 flex items-center gap-1 text-forest/55"><Clock3 size={13} /> {appointment.time}</p></div><span className="rounded-full bg-mint/70 px-3 py-1 text-xs font-semibold text-forest">Upcoming</span></div>
    </article>
  )
}

function AppointmentRow({ appointment, onStatusChange }) {
  return (
    <tr className="border-b border-forest/10 hover:bg-sage/30">
      <td className="py-4 px-5 text-sm font-semibold">{appointment.customer}</td>
      <td className="py-4 px-5 text-sm">{appointment.service}</td>
      <td className="py-4 px-5 text-sm">{appointment.date} {appointment.time}</td>
      <td className="py-4 px-5 text-sm font-semibold text-coral">{formatPeso(appointment.downpayment)}</td>
      <td className="py-4 px-5"><select value={appointment.status} onChange={(e) => onStatusChange(appointment.id, e.target.value)} className="text-xs font-semibold px-3 py-1 rounded-full border border-forest/15 bg-white text-forest">
        <option>Pending</option>
        <option>Confirmed</option>
        <option>Completed</option>
        <option>Cancelled</option>
      </select></td>
    </tr>
  )
}

function CashierDashboard({ identity, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingStatuses, setBookingStatuses] = useState(appointments.reduce((acc, a) => ({ ...acc, [a.id]: a.status }), {}))
  
  const pendingDownpayments = appointments.filter(a => a.status === 'Pending')
  const totalDownpayments = appointments.reduce((sum, a) => sum + a.downpayment, 0)
  const totalBookings = appointments.length

  const handleStatusChange = (id, newStatus) => {
    setBookingStatuses({ ...bookingStatuses, [id]: newStatus })
  }

  return (
    <main className="min-h-screen bg-paper text-forest">
      <nav className="portal-shell mx-5 mt-5 rounded-[1.75rem] px-5 py-5 backdrop-blur sm:mx-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Brand />
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <span className="soft-pill">Cashier Portal</span>
            <button className="flex items-center gap-2 border-l border-forest/15 pl-7 text-forest/60 hover:text-forest" onClick={onLogout}><LogOut size={16} /> Sign out</button>
          </div>
          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="flex flex-col gap-4 border-t border-forest/10 pt-5 mt-5 text-sm font-medium md:hidden"><button className="flex items-center gap-2" onClick={onLogout}><LogOut size={16} /> Sign out</button></div>}
      </nav>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-12">
          <p className="soft-pill">Payment Management</p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl leading-none tracking-tight sm:text-7xl">Booking Dashboard</h1>
          <p className="mt-6 max-w-md text-base leading-7 text-forest/60">Manage bookings, verify payments, and update appointment statuses.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          <div className="metric-card-strong p-6">
            <div className="flex items-center gap-3"><CreditCard size={20} className="text-coral" /><span className="text-xs font-semibold uppercase tracking-wider text-forest/50">Pending Payments</span></div>
            <p className="mt-4 font-display text-4xl">{pendingDownpayments.length}</p>
          </div>
          <div className="metric-card p-6">
            <div className="flex items-center gap-3"><span className="text-lg font-bold leading-none text-coral" aria-hidden="true">₱</span><span className="text-xs font-semibold uppercase tracking-wider text-forest/50">Total Downpayments</span></div>
            <p className="mt-4 font-display text-4xl">{formatPeso(totalDownpayments)}</p>
          </div>
          <div className="metric-card p-6">
            <div className="flex items-center gap-3"><CalendarDays size={20} className="text-coral" /><span className="text-xs font-semibold uppercase tracking-wider text-forest/50">Total Bookings</span></div>
            <p className="mt-4 font-display text-4xl">{totalBookings}</p>
          </div>
        </div>

        <div className="portal-panel overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-forest/10 bg-sage/50">
                <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider text-forest/60">Customer</th>
                <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider text-forest/60">Service</th>
                <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider text-forest/60">Date & Time</th>
                <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider text-forest/60">Downpayment</th>
                <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider text-forest/60">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <AppointmentRow
                  key={appointment.id}
                  appointment={{ ...appointment, status: bookingStatuses[appointment.id] }}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

function ServiceForm({ service, onSave, onCancel }) {
  const [form, setForm] = useState(service || { name: '', duration: '', price: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.duration.trim() || !form.price) {
      setError('All fields are required.')
      return
    }
    if (isNaN(form.price) || form.price <= 0) {
      setError('Price must be a valid number greater than 0.')
      return
    }
    setError('')
    onSave({ ...form, price: parseFloat(form.price) })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="rounded-3xl bg-paper p-8 max-w-md w-full shadow-lg">
        <h2 className="font-display text-2xl mb-6">{service ? 'Edit Service' : 'Add New Service'}</h2>
        {error && <div className="mb-4 rounded-lg bg-coral/15 border border-coral px-4 py-3 text-sm text-coral">{error}</div>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium">
            Service name
            <input className="field mt-1" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g., Signature cut & finish" />
          </label>
          <label className="block text-sm font-medium">
            Duration
            <input className="field mt-1" type="text" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="e.g., 60 min" />
          </label>
          <label className="block text-sm font-medium">
            Price (₱)
            <input className="field mt-1" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="750" step="0.01" />
          </label>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onCancel} className="button-secondary flex-1">Cancel</button>
            <button type="submit" className="button-primary flex-1">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function ManagerDashboard({ identity, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [allServices, setAllServices] = useState(services)
  const [editingService, setEditingService] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const completedBookings = appointments.filter(a => a.status === 'Completed').length
  const totalRevenue = appointments.filter(a => a.status === 'Completed').reduce((sum, a) => sum + a.total, 0)
  const confirmedBookings = appointments.filter(a => a.status === 'Confirmed').length

  const handleAddService = (newService) => {
    setAllServices([...allServices, { ...newService, id: Math.max(...allServices.map(s => s.id), 0) + 1 }])
    setShowForm(false)
  }

  const handleEditService = (updatedService) => {
    setAllServices(allServices.map(s => s.id === updatedService.id ? updatedService : s))
    setEditingService(null)
    setShowForm(false)
  }

  const handleDeleteService = (id) => {
    setAllServices(allServices.filter(s => s.id !== id))
  }

  return (
    <main className="min-h-screen bg-paper text-forest">
      <nav className="portal-shell mx-5 mt-5 rounded-[1.75rem] px-5 py-5 backdrop-blur sm:mx-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Brand />
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <span className="soft-pill">Manager Portal</span>
            <button className="flex items-center gap-2 border-l border-forest/15 pl-7 text-forest/60 hover:text-forest" onClick={onLogout}><LogOut size={16} /> Sign out</button>
          </div>
          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="flex flex-col gap-4 border-t border-forest/10 pt-5 mt-5 text-sm font-medium md:hidden"><button className="flex items-center gap-2" onClick={onLogout}><LogOut size={16} /> Sign out</button></div>}
      </nav>

      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="soft-pill">{activeTab === 'overview' ? 'Operations & Analytics' : 'Service Management'}</p>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl">{activeTab === 'overview' ? 'Management Dashboard' : 'Manage Services'}</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeTab === 'overview' ? 'bg-coral text-white' : 'bg-sage text-forest hover:bg-sage/70'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeTab === 'services' ? 'bg-coral text-white' : 'bg-sage text-forest hover:bg-sage/70'}`}
            >
              Services
            </button>
          </div>
        </div>

        {activeTab === 'overview' && (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              <div className="rounded-3xl bg-linear-to-br from-mint/40 to-sage p-6">
                <div className="flex items-center gap-3"><TrendingUp size={20} className="text-coral" /><span className="text-xs font-semibold uppercase tracking-wider text-forest/50">Completed</span></div>
                <p className="mt-4 font-display text-4xl">{completedBookings}</p>
              </div>
              <div className="rounded-3xl bg-linear-to-br from-coral/20 to-mint/20 p-6">
                <div className="flex items-center gap-3"><span className="text-lg font-bold leading-none text-coral" aria-hidden="true">₱</span><span className="text-xs font-semibold uppercase tracking-wider text-forest/50">Revenue</span></div>
                <p className="mt-4 font-display text-4xl">{formatPeso(totalRevenue)}</p>
              </div>
              <div className="rounded-3xl border border-forest/10 p-6">
                <div className="flex items-center gap-3"><CalendarDays size={20} className="text-coral" /><span className="text-xs font-semibold uppercase tracking-wider text-forest/50">Confirmed</span></div>
                <p className="mt-4 font-display text-4xl">{confirmedBookings}</p>
              </div>
              <div className="rounded-3xl border border-forest/10 p-6">
                <div className="flex items-center gap-3"><Sparkles size={20} className="text-coral" /><span className="text-xs font-semibold uppercase tracking-wider text-forest/50">Total Bookings</span></div>
                <p className="mt-4 font-display text-4xl">{appointments.length}</p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl border border-forest/10 p-8">
                <h2 className="font-display text-2xl mb-6">Recent Bookings</h2>
                <div className="space-y-4">
                  {appointments.slice(0, 3).map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between border-b border-forest/10 pb-4">
                      <div><p className="font-semibold">{apt.customer}</p><p className="text-sm text-forest/60">{apt.service}</p></div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${apt.status === 'Completed' ? 'bg-mint/70 text-forest' : apt.status === 'Confirmed' ? 'bg-coral/20 text-coral' : 'bg-sage text-forest'}`}>
                        {apt.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl bg-forest text-white p-8">
                <h2 className="font-display text-2xl mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <button onClick={() => setActiveTab('services')} className="w-full text-left px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-semibold flex items-center gap-2">
                    <Settings size={16} /> Manage Services
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-semibold flex items-center gap-2">
                    <BarChart3 size={16} /> View Reports
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all font-semibold flex items-center gap-2">
                    <UserRound size={16} /> Manage Staff
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-sm text-forest/60">{allServices.length} services available</p>
              <button onClick={() => { setShowForm(true); setEditingService(null); }} className="button-primary">+ Add Service</button>
            </div>

            <div className="rounded-3xl border border-forest/10 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-forest/10 bg-sage/50">
                    <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider text-forest/60">Service Name</th>
                    <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider text-forest/60">Duration</th>
                    <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider text-forest/60">Price</th>
                    <th className="py-4 px-5 text-left text-xs font-semibold uppercase tracking-wider text-forest/60">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allServices.map((svc) => (
                    <tr key={svc.id} className="border-b border-forest/10 hover:bg-sage/30">
                      <td className="py-4 px-5 font-semibold">{svc.name}</td>
                      <td className="py-4 px-5 text-sm text-forest/60">{svc.duration}</td>
                      <td className="py-4 px-5 font-semibold text-coral">{formatPeso(svc.price)}</td>
                      <td className="py-4 px-5 flex gap-2">
                        <button onClick={() => { setEditingService(svc); setShowForm(true); }} className="px-3 py-1 text-sm rounded bg-mint/60 hover:bg-mint/80 font-semibold text-forest">Edit</button>
                        <button onClick={() => handleDeleteService(svc.id)} className="px-3 py-1 text-sm rounded bg-coral/20 hover:bg-coral/30 font-semibold text-coral">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {showForm && (
        <ServiceForm
          service={editingService}
          onSave={editingService ? handleEditService : handleAddService}
          onCancel={() => { setShowForm(false); setEditingService(null); }}
        />
      )}
    </main>
  )
}

function ServiceCard({ service, isSelected, onClick }) {
  return (
    <button onClick={onClick} className={`text-left rounded-3xl border-2 p-6 transition-all ${isSelected ? 'border-coral bg-coral/10' : 'border-forest/10 hover:border-forest/30'}`}>
      <h3 className="font-display text-xl">{service.name}</h3>
      <div className="mt-3 flex items-center justify-between text-sm text-forest/60">
        <span className="flex items-center gap-1"><Clock3 size={14} /> {service.duration}</span>
        <span className="font-semibold text-forest">{formatPeso(service.price)}</span>
      </div>
    </button>
  )
}

function BookingServices({ onSelectService, onBack }) {
  const [selected, setSelected] = useState(null)

  const handleContinue = () => {
    if (selected) {
      onSelectService(selected)
    }
  }

  return (
    <main className="booking-page px-5 py-6 sm:px-8">
      <nav className="mx-auto mb-10 max-w-5xl">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3">
          <ArrowLeft size={16} /> Back to dashboard
        </button>
      </nav>
      <div className="booking-shell mx-auto max-w-5xl p-6 sm:p-8 lg:p-10">
        <div className="booking-section-header mb-8">
          <p className="section-kicker">Step 1 of 4</p>
          <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">Select your ritual</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-forest/60">Choose the service that best fits your next salon moment.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelected(service)}
              className={`service-option ${selected?.id === service.id ? 'selected' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl leading-none text-forest">{service.name}</h3>
                  <div className="mt-4 flex items-center gap-2 text-sm text-forest/60">
                    <Clock3 size={14} />
                    <span>{service.duration}</span>
                  </div>
                </div>
                <span className="rounded-full bg-white/60 px-2.5 py-1 text-xs font-bold text-coral">{formatPeso(service.price)}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 flex gap-3">
          <button onClick={onBack} className="button-secondary flex-1">Cancel</button>
          <button onClick={handleContinue} disabled={!selected} className={`button-primary flex-1 ${!selected ? 'opacity-50 cursor-not-allowed' : ''}`}>
            Next: Pick a time <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </main>
  )
}

function BookingSchedule({ service, onSelectSchedule, onBack }) {
  const [selectedDate, setSelectedDate] = useState('2026-09-15')
  const [selectedTime, setSelectedTime] = useState(null)

  const handleContinue = () => {
    if (selectedTime) {
      onSelectSchedule({ date: selectedDate, time: selectedTime })
    }
  }

  return (
    <main className="booking-page px-5 py-6 sm:px-8">
      <nav className="mx-auto mb-10 max-w-5xl">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3">
          <ArrowLeft size={16} /> Back
        </button>
      </nav>
      <div className="booking-shell mx-auto max-w-5xl p-6 sm:p-8 lg:p-10">
        <div className="booking-section-header mb-8">
          <p className="section-kicker">Step 2 of 4</p>
          <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">Pick your date & time</h1>
          <p className="mt-4 text-base leading-7 text-forest/60">Selected service: <span className="font-semibold text-forest">{service.name}</span></p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.5fr]">
          <div className="booking-panel p-5 sm:p-6">
            <label className="block text-sm font-medium">Preferred date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="field mt-3"
            />
            <div className="mt-6 rounded-2xl bg-sage/40 p-4 text-sm text-forest/70">
              <p className="font-semibold text-forest">Studio notes</p>
              <p className="mt-2 leading-6">Appointments are typically held with a 15-minute buffer before and after each service.</p>
            </div>
          </div>

          <div className="booking-panel p-5 sm:p-6">
            <label className="block text-sm font-medium">Available times</label>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`time-option ${selectedTime === time ? 'selected' : ''}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-3">
          <button onClick={onBack} className="button-secondary flex-1">Back</button>
          <button onClick={handleContinue} disabled={!selectedTime} className={`button-primary flex-1 ${!selectedTime ? 'opacity-50 cursor-not-allowed' : ''}`}>
            Next: Downpayment <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </main>
  )
}

function BookingDownpayment({ service, schedule, onSubmitPayment, onBack }) {
  const [form, setForm] = useState({ cardName: '', cardNumber: '', expiry: '', cvv: '' })
  const [error, setError] = useState('')
  const downpaymentAmount = Math.round(service.price * 0.3)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.cardName.trim() || !form.cardNumber || !form.expiry || !form.cvv) {
      setError('Please fill in all payment details.')
      return
    }
    if (form.cardNumber.replace(/\s/g, '').length !== 16) {
      setError('Card number must be 16 digits.')
      return
    }
    setError('')
    onSubmitPayment({ ...form, amount: downpaymentAmount })
  }

  return (
    <main className="booking-page px-5 py-6 sm:px-8">
      <nav className="mx-auto mb-10 max-w-5xl">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3">
          <ArrowLeft size={16} /> Back
        </button>
      </nav>
      <div className="booking-shell mx-auto max-w-5xl p-6 sm:p-8 lg:p-10">
        <div className="booking-section-header mb-8">
          <p className="section-kicker">Step 3 of 4</p>
          <h1 className="mt-5 font-display text-5xl tracking-tight sm:text-6xl">Secure your booking</h1>
          <p className="mt-4 text-base leading-7 text-forest/60">A 30% downpayment confirms your reservation and holds your appointment time.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="summary-panel p-6">
            <h3 className="font-display text-3xl text-forest">Booking summary</h3>
            <div className="mt-6 space-y-4 text-sm">
              <div className="summary-line"><span className="text-forest/60">Service</span><span className="font-semibold text-right">{service.name}</span></div>
              <div className="summary-line"><span className="text-forest/60">Date & Time</span><span className="font-semibold text-right">{schedule.date} at {schedule.time}</span></div>
              <div className="summary-line"><span className="text-forest/60">Service price</span><span className="font-semibold">{formatPeso(service.price)}</span></div>
              <div className="summary-total"><span className="text-forest/60">Downpayment (30%)</span><span className="font-display text-3xl text-coral">{formatPeso(downpaymentAmount)}</span></div>
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="booking-panel p-5 sm:p-6">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium">Cardholder name</label>
                  <input className="field mt-2" type="text" value={form.cardName} onChange={(e) => setForm({ ...form, cardName: e.target.value })} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Card number</label>
                  <input className="field mt-2" type="text" value={form.cardNumber} onChange={(e) => setForm({ ...form, cardNumber: e.target.value.replace(/\D/g, '').slice(0, 16) })} placeholder="1234 5678 9012 3456" maxLength="19" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Expiry</label>
                    <input className="field mt-2" type="text" value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value })} placeholder="12/25" maxLength="5" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">CVV</label>
                    <input className="field mt-2" type="text" value={form.cvv} onChange={(e) => setForm({ ...form, cvv: e.target.value.replace(/\D/g, '').slice(0, 3) })} placeholder="123" maxLength="3" />
                  </div>
                </div>
              </div>
            </div>

            {error && <p className="text-sm font-medium text-coral" role="alert">{error}</p>}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={onBack} className="button-secondary flex-1">Back</button>
              <button type="submit" className="button-primary flex-1"><CreditCard size={16} /> Pay {formatPeso(downpaymentAmount)}</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

function BookingConfirmation({ service, schedule, onBackToDashboard }) {
  return (
    <main className="booking-page px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="confirmation-card p-8 py-12 text-center sm:p-12 sm:py-16">
          <p className="section-kicker mx-auto">Step 4 of 4</p>
          <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-forest text-white mx-auto shadow-lg shadow-forest/20">
            <Sparkles size={32} />
          </div>
          <h1 className="mt-8 font-display text-5xl tracking-tight sm:text-6xl">Booking confirmed</h1>
          <p className="mt-6 text-base leading-7 text-forest/60 max-w-lg mx-auto">Your reservation is secured and your downpayment has been received. A confirmation note is on its way to your inbox.</p>

          <div className="mt-12 rounded-3xl border border-forest/10 bg-white/60 p-7 text-left shadow-sm backdrop-blur-sm">
            <h2 className="font-display text-3xl mb-6">Your appointment details</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-forest/10 pb-4"><span className="text-forest/60">Service</span><span className="font-semibold">{service.name}</span></div>
              <div className="flex justify-between border-b border-forest/10 pb-4"><span className="text-forest/60">Date</span><span className="font-semibold">{schedule.date}</span></div>
              <div className="flex justify-between border-b border-forest/10 pb-4"><span className="text-forest/60">Time</span><span className="font-semibold">{schedule.time}</span></div>
              <div className="flex justify-between pt-2"><span className="text-forest/60">Duration</span><span className="font-semibold">{service.duration}</span></div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button onClick={onBackToDashboard} className="button-primary w-full"><ArrowRight size={16} /> Back to dashboard</button>
        </div>
      </div>
    </main>
  )
}

function Dashboard({ identity, onLogout, onBooking }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const firstName = identity.split(/[.@\s]/)[0] || 'there'
  return (
    <main className="min-h-screen bg-paper text-forest">
      <nav className="portal-shell mx-5 mt-5 rounded-[1.75rem] px-5 py-5 backdrop-blur sm:mx-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between"><Brand /><div className="hidden items-center gap-7 text-sm font-medium md:flex"><a className="text-coral" href="#appointments">My appointments</a><a className="text-forest/60 hover:text-forest" href="#care">Care notes</a><button className="flex items-center gap-2 border-l border-forest/15 pl-7 text-forest/60 hover:text-forest" onClick={onLogout}><LogOut size={16} /> Sign out</button></div><button className="md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
        {menuOpen && <div className="flex flex-col gap-4 border-t border-forest/10 pt-5 mt-5 text-sm font-medium md:hidden"><a href="#appointments">My appointments</a><a href="#care">Care notes</a><button className="flex items-center gap-2" onClick={onLogout}><LogOut size={16} /> Sign out</button></div>}
      </nav>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="animate-rise"><p className="soft-pill">Thursday, September 10</p><h1 className="mt-4 max-w-2xl font-display text-5xl leading-none tracking-tight sm:text-7xl">Good morning, {firstName}.</h1><p className="mt-6 max-w-md text-base leading-7 text-forest/60">A little care goes a long way. Here’s what’s waiting for you at the studio.</p></div>
          <div className="metric-card-strong p-6"><div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-coral"><UserRound size={19} /></div><span className="text-xs font-semibold uppercase tracking-wider text-forest/50">Member since 2023</span></div><p className="mt-12 font-display text-2xl">Your routine, in one place.</p><button className="mt-5 flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3">View care notes <ChevronRight size={16} /></button></div>
        </section>
        <section id="appointments" className="mt-20"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="soft-pill">The calendar</p><h2 className="mt-3 font-display text-4xl tracking-tight">Your appointments</h2></div><button onClick={onBooking} className="button-secondary"><CalendarDays size={16} /> Book a visit</button></div><div className="mt-6 border-t border-forest/10">{appointments.map((appointment) => <AppointmentCard key={`${appointment.date}-${appointment.time}`} appointment={appointment} />)}</div></section>
        <section id="care" className="mt-16 grid gap-5 sm:grid-cols-3"><div className="sm:col-span-2 rounded-3xl bg-forest p-7 text-white sm:p-9"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint"><Sparkles size={14} /> Your ritual</div><h2 className="mt-5 max-w-md font-display text-3xl leading-tight">Keep your gloss glowing between visits.</h2><p className="mt-3 max-w-md text-sm leading-6 text-white/60">A few small changes to your wash day can make your salon color last longer.</p><button className="mt-7 flex items-center gap-2 text-sm font-semibold text-mint hover:gap-3">Read your care notes <ArrowRight size={16} /></button></div><div className="portal-panel p-7 sm:p-9"><MapPin size={20} className="text-coral" /><p className="mt-8 font-display text-2xl">Come see us</p><p className="mt-2 text-sm leading-6 text-forest/60">44 Bergen Street<br />Brooklyn, NY 11201</p><button className="mt-5 text-sm font-semibold text-coral hover:underline">Get directions</button></div></section>
      </div>
      <footer className="mx-auto max-w-7xl border-t border-forest/10 px-5 py-8 text-xs text-forest/50 sm:px-8"><div className="flex flex-col justify-between gap-3 sm:flex-row"><p>© 2026 Hearth & Halo</p><p>Made for unrushed mornings and great hair.</p></div></footer>
    </main>
  )
}

function App() {
  const [identity, setIdentity] = useState(null)
  const [role, setRole] = useState(null)
  const [bookingStep, setBookingStep] = useState('dashboard')
  const [selectedService, setSelectedService] = useState(null)
  const [selectedSchedule, setSelectedSchedule] = useState(null)

  const resetCustomerBooking = () => {
    setBookingStep('dashboard')
    setSelectedService(null)
    setSelectedSchedule(null)
  }

  const handleCustomerLogout = () => {
    setIdentity(null)
    setRole(null)
    resetCustomerBooking()
  }

  if (!identity) {
    return <Login onLogin={(selectedRole, selectedIdentity) => {
      setRole(selectedRole)
      setIdentity(selectedIdentity)
      setBookingStep('dashboard')
      setSelectedService(null)
      setSelectedSchedule(null)
    }} />
  }

  if (role === 'cashier') {
    return <CashierDashboard identity={identity} onLogout={() => {
      setIdentity(null)
      setRole(null)
    }} />
  }

  if (role === 'manager') {
    return <ManagerDashboard identity={identity} onLogout={() => {
      setIdentity(null)
      setRole(null)
    }} />
  }

  return null
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
