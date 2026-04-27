import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useTime, formatPHTime } from './useTime'

describe('useTime', () => {
  beforeEach(() => { vi.useFakeTimers() })
  afterEach(() => { vi.useRealTimers() })

  it('returns a Date object', () => {
    const { result } = renderHook(() => useTime())
    expect(result.current).toBeInstanceOf(Date)
  })

  it('updates every second', () => {
    const { result } = renderHook(() => useTime())
    const initial = result.current.getTime()
    act(() => { vi.advanceTimersByTime(1000) })
    expect(result.current.getTime()).toBeGreaterThan(initial)
  })
})

describe('formatPHTime', () => {
  it('returns HH:MM string', () => {
    const d = new Date('2024-01-01T10:30:00Z')
    const result = formatPHTime(d)
    expect(result).toMatch(/^\d{2}:\d{2}$/)
  })
})
