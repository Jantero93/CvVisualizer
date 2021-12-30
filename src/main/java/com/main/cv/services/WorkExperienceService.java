package com.main.cv.services;

import java.util.List;

import com.main.cv.items.WorkExperience;
import com.main.cv.repositiories.WorkExperienceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkExperienceService {

    @Autowired
    WorkExperienceRepository workExperienceRepository;

    public WorkExperience saveOne(WorkExperience workExperience) {
        return workExperienceRepository.save(workExperience);
    }

    public List<WorkExperience> getAll() {
        return workExperienceRepository.findAll();
    }

}
