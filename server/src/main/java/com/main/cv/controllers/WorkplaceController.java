package com.main.cv.controllers;

import com.main.cv.items.Workplace;
import com.main.cv.services.WorkplaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WorkplaceController {

    @Autowired
    private WorkplaceService workplaceService;

    @GetMapping("/api/addtestdata")
    public String addTestData() {
        return workplaceService.addTestWorkplaceData() ? "Added test data" : "Failed adding or data exists";
    }

    @GetMapping("/api/workplaces")
    public List<Workplace> getAllWorkPlaces() {
        return workplaceService.getAllWorkplaces();
    }

}
