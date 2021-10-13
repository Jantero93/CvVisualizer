package com.main.cv.items;

import com.main.cv.items.Location;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Workplace extends AbstractPersistable<UUID> {

    private String address;
    private String name;
    private String description;
    private String size;

    @OneToOne
    private Location location;
}
