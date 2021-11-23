package com.main.cv.controllers;

import java.util.List;

import com.main.cv.items.WorkExperience;
import com.main.cv.services.WorkExperienceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WorkExperienceController {
    final String BASE_URL = "api/workexperiences";

    @Autowired
    private WorkExperienceService workExperienceService;

    @PostMapping(BASE_URL)
    public WorkExperience postOneWorkExperience(@RequestBody WorkExperience workExperience) {
        return workExperienceService.saveOne(workExperience);
    }

    @GetMapping(BASE_URL)
    public List<WorkExperience> getAll() {
        return workExperienceService.getAll();
    }
}
