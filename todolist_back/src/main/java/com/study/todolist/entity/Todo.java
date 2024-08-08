package com.study.todolist.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

// todo를 처음 만들때 noargus로 만들고 그것을  setter로 계속해서 만들어가기 때문에 noargus, allargus가 필요함
// 그리고 그 데이터를 만드는 과정에서 builder를 통해 allargu로 만들기 때문에 다 사용한다.
// 아예 Builder, Noargu, Allartgu 다 안쓴 채로 만들 수 있다.
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Todo {
    private int todoId;
    private int userId;
    private String title;
    private String content;
    private int important;
    private int busy;
    private int status;
    private LocalDateTime todoDateTime;
}
