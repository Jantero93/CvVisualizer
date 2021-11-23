package com.main.cv.items;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Location extends AbstractPersistable<Long> {
    private String latitude;
    private String longitude;

    @JsonIgnore
    @OneToOne(mappedBy = "location")
    private Workplace workplace;

}
