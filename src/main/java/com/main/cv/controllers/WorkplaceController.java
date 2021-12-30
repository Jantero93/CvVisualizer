package com.main.cv.controllers;

import com.main.cv.items.Workplace;
import com.main.cv.services.WorkplaceService;

import org.hibernate.annotations.SourceType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WorkplaceController {
    final String BASE_URL = "/api/workplaces";

    @Autowired
    private WorkplaceService workplaceService;

    @GetMapping("/api/addtestdata")
    public String addTestData() {
        return workplaceService.addTestWorkplaceData() ? "Added test data" : "Failed adding or data exists";
    }

    @GetMapping(BASE_URL)
    public List<Workplace> getAllWorkPlaces() {
        return workplaceService.getAllWorkplaces();
    }

    @PostMapping(BASE_URL)
    public Workplace postOneWorkplace(@RequestBody Workplace workplace) {
        System.out.println(workplace);
        return workplaceService.saveOneWorkplace(workplace);
    }

}
