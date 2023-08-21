function sanitizeSanity(json: unknown): unknown {
  if (Array.isArray(json)) {
    return json.map(sanitizeSanity)
  }

  if (typeof json === 'object' && json !== null) {
    const sanitized: Record<string, unknown> = {}

    for (const [key, value] of Object.entries(json)) {
      if (key === '_type' || key === '_key' || key === '_ref') {
        continue
      }

      sanitized[key] = sanitizeSanity(value)
    }

    return sanitized
  }

  return json
}

export default sanitizeSanity