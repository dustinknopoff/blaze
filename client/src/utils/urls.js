export default {
  WS_HOST: (() => {
    if (typeof window === 'undefined') return '';
    if (WS_HOST) return WS_HOST;

    if (window.location.protocol === 'https:') {
      return `wss://server-blaze.knopoff.dev/ws`;
    }

    return `wss://server-blaze.knopoff.dev/ws`;
  })(),
  SERVER_HOST: (() => {
    if (typeof window === 'undefined') return '';
    if (SERVER_HOST) return SERVER_HOST;

    if (window.location.protocol === 'https:') {
      return `https://server-blaze.knopoff.dev`;
    }

    return `https://server-blaze.knopoff.dev`;
  })(),
};
