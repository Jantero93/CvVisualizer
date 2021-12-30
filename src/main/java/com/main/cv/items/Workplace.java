package com.main.cv.items;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Workplace extends AbstractPersistable<Long> {

    private String address;
    private String name;
    private String description;
    private String size;

    @OneToOne(cascade = { CascadeType.ALL }, fetch = FetchType.LAZY)
    private Location location;
}
