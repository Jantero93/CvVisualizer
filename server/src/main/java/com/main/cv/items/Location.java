package com.main.cv.items;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor @NoArgsConstructor
public class Location extends AbstractPersistable<UUID> {
    private String latitude;
    private String longitude;

    @JsonIgnore
    @OneToOne(mappedBy = "location")
    private Workplace workplace;

}
