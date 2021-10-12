package com.main.cv;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
public class Location extends AbstractPersistable<Long> {
    private Double latitude;
    private Double longitude;

    @OneToOne(mappedBy = "location")
    private Workplace workplace;

}
