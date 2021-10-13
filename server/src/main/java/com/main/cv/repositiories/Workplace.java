package com.main.cv.repositiories;

import com.main.cv.repositiories.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Workplace extends AbstractPersistable<Long> {

    private String address;
    private String name;
    private String description;
    private String size;

    @OneToOne
    private Location location;
}
