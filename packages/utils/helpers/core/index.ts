import MobileDetect from 'mobile-detect'

export const mobileDetect = (ctx: object): string => {
  /* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
  // @ts-ignore
  const headers = ctx && ctx.req && ctx.req.headers
  const detected = headers
    ? new MobileDetect(headers['user-agent'] as string)
    : new MobileDetect(navigator.userAgent)

  return detected.mobile()
}

export const isTouch = (ctx: object): boolean => {
  return Boolean(mobileDetect(ctx))
}

export const changePropsValueToBoolean = (props: object): object => {
  return Object.keys(props).reduce((acc, name) => {
    return {
      ...acc,
      [name]: Boolean(props[name]),
    }
  }, {})
}
