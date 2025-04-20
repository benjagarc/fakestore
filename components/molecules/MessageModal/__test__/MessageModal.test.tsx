import { fireEvent, render, screen } from "@testing-library/react";
import MessageModal from "..";

const mockMessageContent = {
  title: "Are you sure you want to delete this product?",
  content: "This action cannot be undone",
  handleClickConfirm: jest.fn(),
  handleClickCancel: jest.fn(),
};

describe("MessageModal", () => {
  it("Should render wtihout errors", () => {
    render(<MessageModal {...mockMessageContent} />);
    expect(screen.getByText(mockMessageContent.title)).toBeInTheDocument();
  });

  it("Should render title correcctly", () => {
    render(<MessageModal {...mockMessageContent} />);
    const titleElement = screen.getByRole("heading", {
      name: mockMessageContent.title,
    });
    expect(titleElement).toBeInTheDocument();
  });

  it("Should render description", () => {
    render(<MessageModal {...mockMessageContent} />);
    const descriptionElement = screen.getByText(mockMessageContent.content);
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement.tagName).toBe("P");
  });

  it("Should render button confirm and cancel correctly ", () => {
    render(<MessageModal {...mockMessageContent} />);
    const buttonConfirm = screen.getByRole("button", { name: "Confirm" });
    const buttonCancel = screen.getByRole("button", { name: "Cancel" });
    expect(buttonConfirm).toBeInTheDocument();
    expect(buttonConfirm).toHaveClass("btn-custom");
    expect(buttonCancel).toBeInTheDocument();
    expect(buttonCancel).toHaveClass("btn-secondary");
  });

  it("Should call handleClickConfirm when button confirm is clicked", async () => {
    render(<MessageModal {...mockMessageContent} />);
    const buttonConfirm = screen.getByRole("button", { name: "Confirm" });
    fireEvent.click(buttonConfirm);
    expect(mockMessageContent.handleClickConfirm).toHaveBeenCalledTimes(1);
  });

  it("Should call handleClickCancel when button cancel is clicked", async () => {
    render(<MessageModal {...mockMessageContent} />);
    const buttonConfirm = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(buttonConfirm);
    expect(mockMessageContent.handleClickCancel).toHaveBeenCalledTimes(1);
  });
});
