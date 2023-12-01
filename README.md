# 📚 Next.js, Tailwind, Antd Template Project**

<img src="https://github.com/Sahapat/Next-Tailwind-Antd-Template/blob/master/captures/Landing.JPG" width="420"/>

I created this template for my customer who have specific requirement to using Next, Tailwind and Ant Design together. But after I think for a while this template should be public for everyone. I'm open mind to improve my knowledge, you can pull-request. I hope this template could help someone who facing the same requirement as me.

## 🚀 Get Started
1. Clone the repository
2. Follow the detailed documentation for setup and customization.
3. Start building your awesome project!

## 🌟Support

- Ant Design
- TailwindCSS with `tw-` prefix.
- AnimateCSS
- MomentJs
- Zustand
- SocketIO
- Axios
- React Icons
- Jest
- SCSS
- TypeScript

## Directory Structure

- `__mocks__` for storing mocking data.
- `__tests__` for storing test files.
- `src`
  - `actions` This directory containing the function which doing the application actions. The application action defined the function which changing the state or request to the server. For example, login, change password and etc.

  - `components` This directory containing the React components. The component must be reusable and not strict to the context. For example, card, timeline item and etc.

  - `constants` For storing application constants.

  - `functions` You may confuse between the `actions` directory. The key difference is `functions` contain the function for computing and dealing the business logic without changing the application states. For example, the login action might be request to the server then got the user response and storing to the state. But for the `functions`, let's say we have the logic to project the data to the chart. We might named the function to `convertToLineChart`, this function is not changing the application state it receiving the data then output into desire format.

  - `hooks` For storing React hooks.

  - `lib` For importing and customizing libraries.

  - `pages` For storing Next page files.

  - `store` For storing Zustand store files
    - `interfaces` For storing store slice interfaces.
    - `slices` For storing store slices.

  - `styles` For storing cascading style sheet files

  - `types` For storing application types and interfaces. The difference from `store/interfaces` is store interface is for Zustand slice interface only but this directory is for whole application types.

  - `util` For sharing utility functions.
  - `views` React component for holding business context and compositing application components.

# 👥 Maintainers
- [Sahapat](https://github.com/Sahapat)

# ⚖️ License
This project is licensed under the [MIT License](LICENSE).

# 🔄 Frequent Updates
We strive to keep this template up-to-date with the latest technologies and best practices.

If you find this template helpful, don't forget to ⭐️ it!
