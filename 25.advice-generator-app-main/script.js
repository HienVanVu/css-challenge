console.log("Hello world");

const ADVICES = [
  {
    id: 112,
    txt: "Set clear goals: When you have a clear idea of what you want to achieve, it's easier to stay motivated. Write down your goals and break them down into smaller, manageable steps.",
  },
  {
    id: 222,
    txt: "Find inspiration: Surround yourself with things and people that inspire you. This could be anything from motivational quotes to success stories of people who have achieved what you want to achieve.",
  },
  {
    id: 344,
    txt: "Celebrate small victories: Don't wait until you've achieved your ultimate goal to celebrate. Celebrate every small step you take towards your goal.",
  },
  {
    id: 42,
    txt: "Get organized: A cluttered environment can lead to a cluttered mind. Take some time to organize your space and prioritize your tasks.",
  },
  {
    id: 51,
    txt: "Visualize success: Close your eyes and imagine yourself achieving your goal. Visualization can be a powerful tool to help you stay motivated.",
  },
  {
    id: 600,
    txt: "Take care of yourself: Eating well, getting enough sleep, and exercising regularly can all help boost your motivation levels.",
  },
  {
    id: 73,
    txt: "Surround yourself with positive people: The people you spend time with can have a big impact on your motivation levels. Surround yourself with positive, supportive people who encourage you to reach your goals.",
  },
];

const button = document.querySelector("footer");
const quoteId = document.querySelector(".quote-id");
const quote = document.querySelector(".quote");

quoteId.innerHTML = ADVICES[0].id;
quote.innerHTML = ADVICES[0].txt;

button.addEventListener("click", clickHandle);

function clickHandle(e) {
  let currentId = ADVICES.findIndex((item) => item.id == quoteId.innerHTML);
  if (currentId == ADVICES.length - 1) currentId = -1;
  quoteId.innerHTML = ADVICES[currentId + 1].id;
  quote.innerHTML = ADVICES[currentId + 1].txt;
}
