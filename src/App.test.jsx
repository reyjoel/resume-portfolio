import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing and shows name', () => {
    render(<App />)
    expect(screen.getAllByText('Rey Joel L. Matugas').length).toBeGreaterThan(0)
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
