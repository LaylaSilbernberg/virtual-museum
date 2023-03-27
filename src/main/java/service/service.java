package service;

import org.springframework.beans.factory.annotation.Autowired;
import repository.imageRepo;

import java.util.List;

public class service {
    private imageRepo repo;

    public service(@Autowired imageRepo repo){
        this.repo=repo;
    }

    public List<String> findAll(){
        return repo.findAll();
    }

    public void saveImage(String url){
        repo.save(url);
    }


}
