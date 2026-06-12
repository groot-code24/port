export function ThemeScript() {
  const script = `
    (function() {
      try {
        var theme = localStorage.getItem("theme") || "light";
        document.documentElement.dataset.theme = theme;
        document.documentElement.classList.toggle("dark", theme === "dark");
      } catch (error) {}
    })();
  `

  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
