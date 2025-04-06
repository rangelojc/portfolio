export const scrollTargetToChild = (
  target: string,
  child: string,
  smooth?: boolean,
  offsetTop: number = 0
) => {
  const targetEl = document.querySelector(target) as HTMLElement;
  const childEl = document.querySelector(child) as HTMLElement;

  if (targetEl && childEl) {
    targetEl.scroll({
      top: childEl.offsetTop + offsetTop,
      behavior: smooth ? "smooth" : "instant",
    });
  }
};
