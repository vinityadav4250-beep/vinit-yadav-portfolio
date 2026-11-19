import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaLinkedinIn } from 'react-icons/fa6'
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineClipboardDocument,
  HiOutlineCheck,
  HiArrowUpRight,
  HiOutlinePaperAirplane,
} from 'react-icons/hi2'
import { personalInfo } from '@/data/portfolio'
import { Button } from '@/components/ui/Button'
import { SplitText } from '@/components/ui/SplitText'
import { fadeUp, stagger, viewportOnce } from '@/utils/animations'

type Fields = { name: string; email: string; subject: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (f.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!EMAIL_RE.test(f.email.trim())) e.email = 'Please enter a valid email address.'
  if (f.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
  return e
}

const inputCls =
  'w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-[15px] text-zinc-100 placeholder:text-zinc-600 transition-colors focus:outline-none focus:ring-0'

export function Contact() {
  const [fields, setFields] = useState<Fields>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }))
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = personalInfo.email
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length) {
      const first = Object.keys(found)[0]
      document.getElementById(`contact-${first}`)?.focus()
      return
    }
    const subject = fields.subject.trim() || `Portfolio enquiry from ${fields.name.trim()}`
    const body = `${fields.message.trim()}\n\n— ${fields.name.trim()}\n${fields.email.trim()}`
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field = (k: keyof Fields, label: string, props: Record<string, unknown> = {}, textarea = false) => {
    const id = `contact-${k}`
    const err = errors[k]
    const common = {
      id,
      name: k,
      value: fields[k],
      onChange: set(k),
      'aria-invalid': !!err,
      'aria-describedby': err ? `${id}-error` : undefined,
      className: `${inputCls} ${err ? 'border-rose-400/50 focus:border-rose-400' : 'border-white/[0.08] focus:border-violet-400/60'}`,
      ...props,
    }
    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-[13px] text-zinc-400">
          {label}
        </label>
        {textarea ? <textarea rows={5} {...common} className={`${common.className} resize-none`} /> : <input {...common} />}
        <AnimatePresence>
          {err && (
            <motion.p
              id={`${id}-error`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-rose-300"
              role="alert"
            >
              {err}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <section id="contact" className="section overflow-hidden" aria-label="Contact">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(124,58,237,0.18),transparent)]" aria-hidden />
      <div className="container-site">
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mx-auto mb-16 max-w-3xl text-center">
          <motion.p variants={fadeUp} className="eyebrow mb-5 justify-center">
            <span className="text-violet-400">06</span>
            <span className="h-px w-6 bg-white/15" aria-hidden />
            Contact
          </motion.p>
          <h2 className="text-[2.4rem] font-semibold leading-[1.05] tracking-tightest sm:text-6xl">
            <SplitText text="Have an Interesting Project in Mind?" highlight={['Interesting', 'Project']} />
          </h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-zinc-400">
            Let&apos;s build something impactful together.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 [&>*]:min-w-0 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="flex flex-col gap-4">
            <motion.div variants={fadeUp} className="panel p-6">
              <p className="flex items-center gap-2 text-[13px] text-zinc-500">
                <HiOutlineEnvelope aria-hidden /> Email
              </p>
              <p className="mt-2 break-all font-display text-lg text-zinc-50 sm:text-xl">{personalInfo.email}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button href={`mailto:${personalInfo.email}`} external={false} magnetic={0.15}>
                  <HiOutlinePaperAirplane className="h-4 w-4" aria-hidden /> Email me
                </Button>
                <Button variant="secondary" onClick={copyEmail} magnetic={0.15} ariaLabel="Copy email address">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? 'ok' : 'copy'}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="inline-flex items-center gap-2"
                    >
                      {copied ? <HiOutlineCheck className="h-4 w-4 text-emerald-300" aria-hidden /> : <HiOutlineClipboardDocument className="h-4 w-4" aria-hidden />}
                      {copied ? 'Copied!' : 'Copy email'}
                    </motion.span>
                  </AnimatePresence>
                </Button>
              </div>
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </motion.div>

            <motion.a
              variants={fadeUp}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="panel group flex items-center gap-4 p-6 transition-colors hover:border-white/15"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a66c2]/15 text-[#4ea3e6]">
                <FaLinkedinIn className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[13px] text-zinc-500">LinkedIn</p>
                <p className="truncate text-zinc-100">{personalInfo.linkedinLabel}</p>
              </div>
              <HiArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-zinc-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-100" aria-hidden />
            </motion.a>

            <motion.div variants={fadeUp} className="panel flex items-center gap-4 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <HiOutlineMapPin className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-[13px] text-zinc-500">Location</p>
                <p className="text-zinc-100">{personalInfo.location} · open to remote</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="panel-glass p-6 md:p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="sent" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex h-full min-h-[380px] flex-col items-center justify-center text-center" role="status">
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                    <HiOutlineCheck className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="text-2xl font-semibold text-zinc-50">Your email app should be open.</h3>
                  <p className="mt-3 max-w-sm text-zinc-400">
                    Your message is pre-filled — just hit send. If nothing opened, email me directly at{' '}
                    <a className="text-zinc-100 underline decoration-white/30 underline-offset-4 hover:decoration-white" href={`mailto:${personalInfo.email}`}>
                      {personalInfo.email}
                    </a>
                    .
                  </p>
                  <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm text-zinc-500 underline underline-offset-4 hover:text-zinc-200">
                    Write another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={onSubmit} noValidate className="space-y-5" aria-label="Contact form">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {field('name', 'Your name', { autoComplete: 'name', placeholder: 'Jane Doe' })}
                    {field('email', 'Email', { type: 'email', autoComplete: 'email', placeholder: 'jane@company.com' })}
                  </div>
                  {field('subject', 'Subject (optional)', { placeholder: 'Senior .NET role / project idea' })}
                  {field('message', 'Message', { placeholder: 'Tell me about the role or project…' }, true)}
                  <div className="flex flex-col-reverse items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                    <p className="text-xs text-zinc-600">Opens your email app with the message pre-filled.</p>
                    <Button type="submit" magnetic={0.15}>
                      Send message <HiOutlinePaperAirplane className="h-4 w-4" aria-hidden />
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
