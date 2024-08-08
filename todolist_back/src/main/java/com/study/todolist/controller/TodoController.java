package com.study.todolist.controller;


import com.study.todolist.dto.request.todo.ReqAddtodoDto;
import com.study.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    // created(보통 post 요청에 많이 응답함) : 201 응답
    @PostMapping("/todo")
    public ResponseEntity<?> add(@RequestBody ReqAddtodoDto dto) {
        int successCount = todoService.addTodo(dto);
        return ResponseEntity.created(null).body(successCount);
    }
}
