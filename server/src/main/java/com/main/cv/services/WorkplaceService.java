package com.main.cv.services;

import com.main.cv.items.Location;
import com.main.cv.items.Workplace;
import com.main.cv.repositiories.LocationRepository;
import com.main.cv.repositiories.WorkplaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkplaceService {

    @Autowired
    WorkplaceRepository workplaceRepository;

    @Autowired
    LocationRepository locationRepository;

    public boolean addTestWorkplaceData() {
        if (workplaceRepository.findAll().size() > 0) {
            return false;
        }

        StringBuilder name = new StringBuilder("test");

        for (int i = 0; i < 10; i++) {
            Workplace w = new Workplace();
            w.setAddress("street " + i * 10);
            w.setDescription("description + " + i * 100);
            w.setName(name.append(i).toString());
            w.setSize("small");

            Location l = new Location();
            l.setLatitude(Integer.toString(i + 2));
            l.setLongitude(Integer.toString(i - 2));
            w.setLocation(l);
            locationRepository.save(l);
            workplaceRepository.save(w);
        }
        return true;
    }

    public List<Workplace> getAllWorkplaces() {
        return workplaceRepository.findAll();
    }
}
