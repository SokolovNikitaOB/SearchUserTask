package main;

import main.Model.TaskRepository;
import main.Model.Tasks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DefaultController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/tasks/")
    public List<Tasks> getAllTasks() {
        Iterable<Tasks> taskIterable = taskRepository.findAll();
        ArrayList<Tasks> tasks = new ArrayList<>();
        for(Tasks task : taskIterable){
            tasks.add(task);
        }
        return tasks;
    }
}
