export const animation = (delay) => ({
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 + delay / 10 < 0.65 ? 0.65 + delay / 10 : 0.7 },
  },
  hidden: { opacity: 0.1, y: 100 },
});
