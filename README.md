# ParrotUI 🦜

![](https://github.com/user-attachments/assets/fffa457d-7149-4e12-bf39-8250a743e7f1)

## 🎯 Project Aim

ParrotUI aims to simplify UI development by providing a library of easy-to-use, copy-paste components. Our main philosophy is that users should understand their UI components deeply.

## ✨ Features

- **No-CLI Approach**: Simply copy and paste components into your project
- **Tailwind CSS**: Utilize the power of Tailwind for responsive and customizable designs
- **TSX Components**: TypeScript support out of the box
- **Minimal Dependencies**: Optimized to use fewer third-party libraries
- **Easy to Understand**: Clean, well-documented code for each component
- **Customizable**: Easily modify components to fit your specific needs

## 🚀 Getting Started

### Prerequisites

- A React project set up with TypeScript
- Tailwind CSS installed in your project

### Installation

1. There's no installation required!
2. Browse through our collection of components.
3. When you find a component you like, simply copy the code.
4. Paste the component directly into your project.

## 📖 Usage

1. Navigate to the ParrotUI component library.
2. Select the component you want to use.
3. Copy the component code.
4. Paste it into your React TSX file.
5. Customize the component as needed using Tailwind classes or by modifying the TSX.

Example:

```tsx
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  id?: string;
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false, className, id, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-lg focus:outline-none transition-colors duration-300';

  const disabledStyless = disabled && 'opacity-40 bg-gray-200 cursor-not-allowed';

  return (
    <button
      {...props}
      className={`${baseClasses} ${disabledStyless} ${className}`}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
```

## 🤝 Contributing

We welcome contributions to ParrotUI! Here's how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Write your code, ensuring it follows our coding standards and philosophy.
4. Add or update documentation as necessary.
5. Submit a pull request with a clear description of your changes.

To start the project first copy the code then run the following commands in your terminal:

```bash
  bun install
```
```bash
  bun run dev
```

Please ensure your contributions align with our project philosophy:
- Keep components simple and easy to understand
- Minimize third-party dependencies
- Use Tailwind CSS for styling
- Provide clear documentation and usage examples

## 📄 License

ParrotUI is released under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Get started quickly with ParrotUI's simple and intuitive design! If you have any questions or need support, please [open an issue](https://github.com/ddoemonn/parrot_ui/issues) on our GitHub repository.
