const question = () => {
  const questionDropsBlocks = document.querySelectorAll(
    ".question__drops-block"
  );

  questionDropsBlocks.forEach((questionDropsBlock) => {
    questionDropsBlock.addEventListener("click", (e) => {
      if (e.target.closest(".question__drops-block")) {
        questionDropsBlock.classList.toggle("question__drops-block--active");

        const closeBtn = questionDropsBlock.querySelector(".close");
        closeBtn.classList.toggle("close--active");
      }
    });
  });
};

export default question;
