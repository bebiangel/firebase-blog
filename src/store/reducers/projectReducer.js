const initialState = {
  projects: [
    {
      title: `ant design part 1`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    },
    {
      title: `ant design part 2`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    },
    {
      title: `ant design part 3`,
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
    }
  ]
};

const projectReducer = (state = initialState, action) => {
  //
  switch (action.type) {
    //
    case "CREATE_PROJECT":
      return state;

    case "CREATE_PROJECT_ERROR":
      return state;

    default:
      return state;
  }
};

export default projectReducer;
