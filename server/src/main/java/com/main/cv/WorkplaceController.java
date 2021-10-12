package com.main.cv;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WorkplaceController {

    @Autowired
    private WorkplaceRepository workplaceRepository;

    @Autowired
    private LocationRepository locationRepository;

    @GetMapping("/addtestdata")
    public String addTestData() {
        if (workplaceRepository.findAll().size() > 0) {
            return "data exists already, maybe no need to create more";
        }
            for ( int i = 0; i < 10; i++ ) {
                Workplace w = new Workplace();
                w.setAddress( "street " + i * 10 );
                w.setDescription( "description + " + i * 100 );
                w.setSize( "small" );
                Location l = new Location();
                l.setLatitude( 2d );
                l.setLongitude( 2d );
                locationRepository.save( l );
                w.setLocation( l );
                workplaceRepository.save( w );
            }

        return "probably add test data was successful";
    }

    @GetMapping("/workplaces")
    public List<Workplace> getAllWorkPlaces() {
        return workplaceRepository.findAll();
    }

}
