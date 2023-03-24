export const formatDate = (timestamp) => {
  const d = new Date(timestamp);
  return d.toLocaleDateString();
};

export const voteColor = {
  primary: {
    bgColor: "#9cf0c9",
    color: "#06a158",
  },
  secondary: {
    bgColor: "#ccc",
    color: "#000000",
  },
};

export const sayGreetings = () => {
  const d = new Date();
  const hours = d.getHours();

  if (hours < 12) {
    return "Good Morning";
  }

  if (hours >= 12 && hours < 17) {
    return "Good Afternoon";
  }

  if (hours >= 17 && hours < 21) {
    return "Good Evening";
  }
};
