import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from './App'

describe('App', () => {
  beforeEach(() => { cleanup() })

  it('renders without crashing and shows name', () => {
    render(<App />)
    // name appears in TopBar + Hero profile card
    expect(screen.getAllByText('Rey Joel L. Matugas')).toHaveLength(2)
  })

  it('renders all section landmarks', () => {
    render(<App />)
    expect(document.querySelector('#top')).toBeInTheDocument()
    expect(document.querySelector('#about')).toBeInTheDocument()
    expect(document.querySelector('#experience')).toBeInTheDocument()
    expect(document.querySelector('#skills')).toBeInTheDocument()
    expect(document.querySelector('#projects')).toBeInTheDocument()
    expect(document.querySelector('#contact')).toBeInTheDocument()
  })
})
