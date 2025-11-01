export default function useScrollToTop(elRef) {
  elRef?.value?.scrollTo({
    top: 0,
    // behavior: 'smooth'
  });
}