import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  CreditCard,
  LogOut,
  MapPin,
  Menu,
  Scissors,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'
import './index.css'

const appointments = [
  { service: 'Signature cut & finish', stylist: 'with Mara', date: 'Thu, Sep 17', time: '10:30 AM', status: 'Upcoming' },
  { service: 'Gloss refresh', stylist: 'with Noor', date: 'Sat, Oct 24', time: '2:00 PM', status: 'Upcoming' },
]

const services = [
  { id: 1, name: 'Signature cut & finish', duration: '60 min', price: 75 },
  { id: 2, name: 'Gloss refresh', duration: '45 min', price: 50 },
  { id: 3, name: 'Full color service', duration: '120 min', price: 150 },
  { id: 4, name: 'Styling session', duration: '30 min', price: 40 },
  { id: 5, name: 'Scalp treatment', duration: '45 min', price: 60 },
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
]

function Brand({ light = false }) {
  return (
    <div className={`flex items-center gap-3 ${light ? 'text-white' : 'text-forest'}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-current">
        <Scissors size={17} strokeWidth={1.7} />
      </div>
      <div>
        <p className="font-display text-xl leading-none tracking-tight">Hearth & Halo</p>
        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.24em] opacity-70">Hair studio</p>
      </div>
    </div>
  )
}

function Login({ onLogin }) {
  const [form, setForm] = useState({ identity: '', password: '' })
  const [error, setError] = useState('')

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
    onLogin(form.identity.trim())
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Welcome back</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">Your next good hair day starts here.</h2>
          <p className="mt-4 text-sm leading-6 text-forest/60">Sign in to manage your appointments and keep your care routine close.</p>
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
      <div className="flex items-center gap-5 pl-15 text-sm sm:pl-0"><div><p className="font-semibold">{appointment.date}</p><p className="mt-1 flex items-center gap-1 text-forest/55"><Clock3 size={13} /> {appointment.time}</p></div><span className="rounded-full bg-mint/70 px-3 py-1 text-xs font-semibold text-forest">{appointment.status}</span></div>
    </article>
  )
}

function ServiceCard({ service, isSelected, onClick }) {
  return (
    <button onClick={onClick} className={`text-left rounded-3xl border-2 p-6 transition-all ${isSelected ? 'border-coral bg-coral/10' : 'border-forest/10 hover:border-forest/30'}`}>
      <h3 className="font-display text-xl">{service.name}</h3>
      <div className="mt-3 flex items-center justify-between text-sm text-forest/60">
        <span className="flex items-center gap-1"><Clock3 size={14} /> {service.duration}</span>
        <span className="font-semibold text-forest">${service.price}</span>
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
    <main className="min-h-screen bg-paper px-5 py-6 text-forest sm:px-8">
      <nav className="mx-auto mb-12 max-w-4xl">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3">
          <ArrowLeft size={16} /> Back to dashboard
        </button>
      </nav>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Step 1 of 4</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight">Select a service</h1>
          <p className="mt-4 text-base leading-7 text-forest/60">Choose the salon service you'd like to book.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selected?.id === service.id}
              onClick={() => setSelected(service)}
            />
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
    <main className="min-h-screen bg-paper px-5 py-6 text-forest sm:px-8">
      <nav className="mx-auto mb-12 max-w-4xl">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3">
          <ArrowLeft size={16} /> Back
        </button>
      </nav>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Step 2 of 4</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight">Pick a date & time</h1>
          <p className="mt-4 text-base leading-7 text-forest/60">Selected: <span className="font-semibold text-forest">{service.name}</span></p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="field mt-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Available times</label>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`rounded-lg border-2 py-2 px-3 text-sm font-medium transition-all ${
                    selectedTime === time
                      ? 'border-coral bg-coral/10 text-forest'
                      : 'border-forest/15 text-forest/60 hover:border-forest/30'
                  }`}
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
    <main className="min-h-screen bg-paper px-5 py-6 text-forest sm:px-8">
      <nav className="mx-auto mb-12 max-w-3xl">
        <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3">
          <ArrowLeft size={16} /> Back
        </button>
      </nav>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Step 3 of 4</p>
          <h1 className="mt-4 font-display text-5xl tracking-tight">Secure your booking</h1>
          <p className="mt-4 text-base leading-7 text-forest/60">A 30% downpayment confirms your reservation.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-forest/10 p-6">
              <h3 className="font-display text-lg">Booking summary</h3>
              <div className="mt-4 space-y-3 border-t border-forest/10 pt-4 text-sm">
                <div className="flex justify-between"><span className="text-forest/60">Service:</span><span className="font-semibold">{service.name}</span></div>
                <div className="flex justify-between"><span className="text-forest/60">Date & Time:</span><span className="font-semibold">{schedule.date} at {schedule.time}</span></div>
                <div className="flex justify-between"><span className="text-forest/60">Service price:</span><span className="font-semibold">${service.price}</span></div>
                <div className="border-t border-forest/10 pt-3 flex justify-between"><span className="text-forest/60">Downpayment (30%):</span><span className="font-display text-lg text-coral">${downpaymentAmount}</span></div>
              </div>
            </div>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
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
                <label className="block text-sm font-medium">Expiry (MM/YY)</label>
                <input className="field mt-2" type="text" value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value })} placeholder="12/25" maxLength="5" />
              </div>
              <div>
                <label className="block text-sm font-medium">CVV</label>
                <input className="field mt-2" type="text" value={form.cvv} onChange={(e) => setForm({ ...form, cvv: e.target.value.replace(/\D/g, '').slice(0, 3) })} placeholder="123" maxLength="3" />
              </div>
            </div>
            {error && <p className="text-sm font-medium text-coral" role="alert">{error}</p>}
            <div className="flex gap-3 pt-4">
              <button type="button" onClick={onBack} className="button-secondary flex-1">Back</button>
              <button type="submit" className="button-primary flex-1"><CreditCard size={16} /> Pay ${downpaymentAmount}</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

function BookingConfirmation({ service, schedule, onBackToDashboard }) {
  return (
    <main className="min-h-screen bg-paper px-5 py-6 text-forest sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-4xl bg-linear-to-br from-mint/40 to-sage p-12 text-center py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Step 4 of 4</p>
          <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-forest text-white mx-auto">
            <Sparkles size={32} />
          </div>
          <h1 className="mt-8 font-display text-5xl tracking-tight">Booking confirmed!</h1>
          <p className="mt-6 text-base leading-7 text-forest/60 max-w-lg mx-auto">Your downpayment has been processed and your appointment is secured. A confirmation email has been sent to your inbox.</p>
          <div className="mt-12 rounded-3xl bg-white p-8 text-left border border-forest/10">
            <h2 className="font-display text-2xl mb-6">Your appointment details</h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-forest/10 pb-4">
                <span className="text-forest/60">Service:</span>
                <span className="font-semibold">{service.name}</span>
              </div>
              <div className="flex justify-between border-b border-forest/10 pb-4">
                <span className="text-forest/60">Date:</span>
                <span className="font-semibold">{schedule.date}</span>
              </div>
              <div className="flex justify-between border-b border-forest/10 pb-4">
                <span className="text-forest/60">Time:</span>
                <span className="font-semibold">{schedule.time}</span>
              </div>
              <div className="flex justify-between pt-4">
                <span className="text-forest/60">Duration:</span>
                <span className="font-semibold">{service.duration}</span>
              </div>
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
      <nav className="border-b border-forest/10 bg-paper/90 px-5 py-5 backdrop-blur sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between"><Brand /><div className="hidden items-center gap-7 text-sm font-medium md:flex"><a className="text-coral" href="#appointments">My appointments</a><a className="text-forest/60 hover:text-forest" href="#care">Care notes</a><button className="flex items-center gap-2 border-l border-forest/15 pl-7 text-forest/60 hover:text-forest" onClick={onLogout}><LogOut size={16} /> Sign out</button></div><button className="md:hidden" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
        {menuOpen && <div className="flex flex-col gap-4 border-t border-forest/10 pt-5 mt-5 text-sm font-medium md:hidden"><a href="#appointments">My appointments</a><a href="#care">Care notes</a><button className="flex items-center gap-2" onClick={onLogout}><LogOut size={16} /> Sign out</button></div>}
      </nav>
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div className="animate-rise"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Thursday, September 10</p><h1 className="mt-4 max-w-2xl font-display text-5xl leading-none tracking-tight sm:text-7xl">Good morning, {firstName}.</h1><p className="mt-6 max-w-md text-base leading-7 text-forest/60">A little care goes a long way. Here’s what’s waiting for you at the studio.</p></div>
          <div className="rounded-3xl bg-mint/65 p-6"><div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-paper text-coral"><UserRound size={19} /></div><span className="text-xs font-semibold uppercase tracking-wider text-forest/50">Member since 2023</span></div><p className="mt-12 font-display text-2xl">Your routine, in one place.</p><button className="mt-5 flex items-center gap-2 text-sm font-semibold text-coral hover:gap-3">View care notes <ChevronRight size={16} /></button></div>
        </section>
        <section id="appointments" className="mt-20"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">The calendar</p><h2 className="mt-3 font-display text-4xl tracking-tight">Your appointments</h2></div><button onClick={onBooking} className="button-secondary"><CalendarDays size={16} /> Book a visit</button></div><div className="mt-6 border-t border-forest/10">{appointments.map((appointment) => <AppointmentCard key={`${appointment.date}-${appointment.time}`} appointment={appointment} />)}</div></section>
        <section id="care" className="mt-16 grid gap-5 sm:grid-cols-3"><div className="sm:col-span-2 rounded-3xl bg-forest p-7 text-white sm:p-9"><div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-mint"><Sparkles size={14} /> Your ritual</div><h2 className="mt-5 max-w-md font-display text-3xl leading-tight">Keep your gloss glowing between visits.</h2><p className="mt-3 max-w-md text-sm leading-6 text-white/60">A few small changes to your wash day can make your salon color last longer.</p><button className="mt-7 flex items-center gap-2 text-sm font-semibold text-mint hover:gap-3">Read your care notes <ArrowRight size={16} /></button></div><div className="rounded-3xl border border-forest/10 p-7 sm:p-9"><MapPin size={20} className="text-coral" /><p className="mt-8 font-display text-2xl">Come see us</p><p className="mt-2 text-sm leading-6 text-forest/60">44 Bergen Street<br />Brooklyn, NY 11201</p><button className="mt-5 text-sm font-semibold text-coral hover:underline">Get directions</button></div></section>
      </div>
      <footer className="mx-auto max-w-7xl border-t border-forest/10 px-5 py-8 text-xs text-forest/50 sm:px-8"><div className="flex flex-col justify-between gap-3 sm:flex-row"><p>© 2026 Hearth & Halo</p><p>Made for unrushed mornings and great hair.</p></div></footer>
    </main>
  )
}

function App() {
  const [identity, setIdentity] = useState(null)
  const [bookingStep, setBookingStep] = useState(null)
  const [bookingData, setBookingData] = useState({})

  if (!identity) {
    return <Login onLogin={setIdentity} />
  }

  if (bookingStep === 'services') {
    return (
      <BookingServices
        onSelectService={(service) => {
          setBookingData({ service })
          setBookingStep('schedule')
        }}
        onBack={() => setBookingStep(null)}
      />
    )
  }

  if (bookingStep === 'schedule') {
    return (
      <BookingSchedule
        service={bookingData.service}
        onSelectSchedule={(schedule) => {
          setBookingData({ ...bookingData, schedule })
          setBookingStep('payment')
        }}
        onBack={() => setBookingStep('services')}
      />
    )
  }

  if (bookingStep === 'payment') {
    return (
      <BookingDownpayment
        service={bookingData.service}
        schedule={bookingData.schedule}
        onSubmitPayment={(payment) => {
          setBookingData({ ...bookingData, payment })
          setBookingStep('confirmation')
        }}
        onBack={() => setBookingStep('schedule')}
      />
    )
  }

  if (bookingStep === 'confirmation') {
    return (
      <BookingConfirmation
        service={bookingData.service}
        schedule={bookingData.schedule}
        onBackToDashboard={() => {
          setBookingStep(null)
          setBookingData({})
        }}
      />
    )
  }

  return (
    <Dashboard
      identity={identity}
      onLogout={() => setIdentity(null)}
      onBooking={() => setBookingStep('services')}
    />
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
