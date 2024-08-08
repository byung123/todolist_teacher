package com.study.todolist.service;

import com.study.todolist.dto.request.todo.ReqAddtodoDto;
import com.study.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {

    @Autowired
    private TodoMapper todoMapper;

    public int addTodo(ReqAddtodoDto dto) {

        return todoMapper.save(dto.toEntity());
    }
}
