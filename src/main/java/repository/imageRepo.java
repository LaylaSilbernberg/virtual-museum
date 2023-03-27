package repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface imageRepo extends JpaRepository<String, Long> {

// findAll is a default, usable function. Can omit here.

}
