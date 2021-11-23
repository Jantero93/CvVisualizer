package com.main.cv.controllers;

import com.main.cv.items.WorkExperience;
import com.main.cv.services.WorkExperienceService;

import org.springframework.beans.factory.annotation.Autowired;
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
}
