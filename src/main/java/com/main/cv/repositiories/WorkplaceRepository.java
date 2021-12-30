package com.main.cv.repositiories;

import com.main.cv.items.Workplace;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WorkplaceRepository extends JpaRepository<Workplace, Long> {

    /* Prevent N+1 when fetching location with workplace */
    @EntityGraph(attributePaths = {"location"} )
    List<Workplace> findAll();
}
