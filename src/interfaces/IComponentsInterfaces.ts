import { ChangeEvent, ReactNode } from "react";
import { IPost } from "@root/interfaces/IPost";

interface IComponentProps {
  message?: string;
}

interface IErrorBoundaryProps extends IComponentProps {
  fallback?: ReactNode;
  children?: ReactNode;
}

interface IErrorBoundaryState extends IComponentProps {
  hasError: boolean;
}

interface IGlobalErrorProps extends IComponentProps {
  text?: string;
}

interface IPostPlaceholderProps extends IComponentProps {
  post?: IPost;
}

interface IPostDetailsProps extends IPostPlaceholderProps {}

interface IPostHeaderProps extends IComponentProps {
  title: string;
  renderBack: boolean;
  route: string;
  buttonText: string;
}

interface ICommentProps extends IComponentProps {
  postId: number;
  inPostContainer: boolean;
}

interface IAuthorProps extends IComponentProps {
  post: IPost;
}

interface IToggleButtonProps extends IComponentProps {
  handleToggle: () => void;
  isActive: boolean;
}

interface IPageWrapperProps extends IPostHeaderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  renderHeader?: boolean;
}

interface IFieldInputProps extends IComponentProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

interface ICommentSectionProps extends IComponentProps {
  postId: number;
  inPostContainer: boolean;
}

export type {
  IErrorBoundaryProps,
  IErrorBoundaryState,
  IGlobalErrorProps,
  IPostPlaceholderProps,
  IPostDetailsProps,
  IPostHeaderProps,
  ICommentProps,
  IAuthorProps,
  IToggleButtonProps,
  IPageWrapperProps,
  IFieldInputProps,
  IComponentProps,
  ICommentSectionProps,
};
