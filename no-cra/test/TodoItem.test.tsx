import { TodoItem } from '../src/components/TodoItem';
import { Todo } from '../src/model/Todo';
import '@testing-library/jest-dom';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

// renderを使用するたびにマウントされるため、アンマウントするために必要
afterEach(() => {
  return cleanup();
});

describe('TodoItem components', () => {
  it('matches snapshot', () => {
    const todo: Todo = { title: 'test title', description: 'test description' };
    const { asFragment } = render(<TodoItem todo={todo} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
  test('render todo', () => {
    const todo: Todo = { title: 'test title', description: 'test description' };
    render(<TodoItem todo={todo} />);
    expect(screen.getByText('test title')).toBeInTheDocument();
    expect(screen.getByText('test description')).toBeInTheDocument();
  });
  it('click todo', () => {
    const mockFunction = jest.fn();
    const todo: Todo = { title: 'test title', description: 'test description' };
    render(<TodoItem todo={todo} onClick={mockFunction} />);
    const todoItem = screen.getByText('test title').parentNode as HTMLElement;
    userEvent.click(todoItem);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
