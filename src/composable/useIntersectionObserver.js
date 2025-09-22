import { ref, onMounted, onUnmounted, nextTick } from "vue";

export function useIntersectionObserver(
  targetRef,
  options = { threshold: 0.2 }
) {
  const isVisible = ref(false);
  let observer;

  onMounted(async () => {
    await nextTick();

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) isVisible.value = entry.isIntersecting;
      });
    }, options);

    if (targetRef.value) observer.observe(targetRef.value);
  });

  onUnmounted(() => {
    observer.disconnect();
  });

  return { isVisible };
}
