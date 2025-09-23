import { ref, onMounted, onUnmounted, nextTick } from "vue";

export function useIntersectionObserver(options = { threshold: 0.2 }) {
  const isVisible = ref(false);
  const targetRef = ref(null);
  let observer;

  onMounted(async () => {
    await nextTick();

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting);
        isVisible.value = entry.isIntersecting;
      });
    }, options);

    if (targetRef.value) observer.observe(targetRef.value);
  });

  onUnmounted(() => {
    if (observer && targetRef.value) observer.unobserve(targetRef.value);
  });

  return { targetRef, isVisible };
}
